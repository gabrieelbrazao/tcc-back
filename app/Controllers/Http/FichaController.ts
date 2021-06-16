import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ficha from 'App/Models/Ficha'
import Usuario from 'App/Models/Usuario'
import FileUpload from 'App/Utils/FileUpload'

export default class FichasController {
  public async index({ auth, response }: HttpContextContract) {
    const user = await Usuario.find(auth.use('api').user?.id)

    if (!user) {
      response.notFound({ erro: 'Usuário não encontrado' })
      return
    }

    const records = await Ficha.query()
      .preload('consultas', (consultasQuery) => {
        consultasQuery.orderByRaw('id DESC').limit(1)
      })
      .preload('cliente')

    const result = records.map((record) =>
      record.serialize({
        fields: {
          pick: ['imagem_rosto', 'data', 'id'],
        },
        relations: {
          cliente: {
            fields: ['nome'],
          },
          consultas: {
            fields: ['tratamentos', 'observacoes', 'orientacoes'],
          },
        },
      })
    )

    response.ok(result)
  }

  public async show({ auth, response }: HttpContextContract) {
    const record = await Ficha.find(auth.use('api').user?.id)

    if (!record) {
      response.notFound({ erro: 'Ficha não encontrada' })
      return
    }

    response.ok(record.serialize())
  }

  public async create({ request, response }: HttpContextContract) {
    const signature = request.file('assinaturaCliente')

    if (!signature) {
      response.badRequest({ erro: 'Assinatura não enviada' })
      return
    }

    const faceImage = request.file('imagemRosto')

    if (!faceImage) {
      response.badRequest({ erro: 'Imagem do rosto não enviada' })
      return
    }

    const uploader = new FileUpload()
    const signatureUri = await uploader.S3(signature)
    const faceImageUri = await uploader.S3(faceImage)

    const record = await Ficha.create({
      ...request.body(),
      assinaturaCliente: signatureUri,
      imagemRosto: faceImageUri,
    })

    if (!record.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar criar ficha' })
      return
    }

    response.noContent()
  }

  public async update({ request, response }: HttpContextContract) {
    const record = await Ficha.find(request.param('id'))

    if (!record) {
      response.notFound({ erro: 'Ficha não encontrada' })
      return
    }

    const signature = request.file('assinaturaCliente')
    const faceImage = request.file('imagemRosto')

    const data = request.body()

    const uploader = new FileUpload()

    if (signature) {
      const signatureUri = await uploader.S3(signature)
      data.assinaturaCliente = signatureUri
    }

    if (faceImage) {
      const faceImageUri = await uploader.S3(faceImage)
      data.imagemRosto = faceImageUri
    }

    await record.merge(data).save()

    if (!record.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar alterar ficha' })
      return
    }

    response.noContent()
  }
}
