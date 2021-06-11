import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Consulta from 'App/Models/Consulta'
import Ficha from 'App/Models/Ficha'
import FileUpload from 'App/Utils/FileUpload'

export default class ConsultaController {
  public async index({ request, response }: HttpContextContract) {
    const record = await Ficha.find(request.param('id'))

    if (!record) {
      response.notFound({ erro: 'Ficha não encontrada' })
      return
    }

    const consultations = await Consulta.query().where('ficha_id', request.param('id'))

    const result = consultations.map((consultation) =>
      consultation.serialize({
        fields: {
          omit: ['ficha_id'],
        },
      })
    )

    response.ok(result)
  }

  public async create({ request, response }: HttpContextContract) {
    const record = await Ficha.find(request.param('id'))

    if (!record) {
      response.notFound({ erro: 'Ficha não encontrada' })
      return
    }

    const signature = request.file('assinaturaCliente')

    if (!signature) {
      response.badRequest({ erro: 'Assinatura não enviada' })
      return
    }

    const uploader = new FileUpload()
    const signatureUri = await uploader.S3(signature)

    const consultation = await Consulta.create({
      ...request.body(),
      assinaturaCliente: signatureUri,
      fichaId: request.param('id'),
    })

    if (!consultation.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar criar consulta' })
      return
    }

    response.noContent()
  }
}
