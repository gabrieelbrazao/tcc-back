import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import Usuario from 'App/Models/Usuario'

export default class ClienteController {
  public async showById({ request, response }: HttpContextContract) {
    const client = await Cliente.find(request.param('id'))

    if (!client) {
      response.notFound({ erro: 'Cliente não encontrado' })
      return
    }

    response.ok(client.serialize())
  }

  public async showByUser({ auth, response }: HttpContextContract) {
    const clients = await Cliente.query().where('usuario_id', auth.use('api').user?.id || 0)

    const result = clients.map((client) =>
      client.serialize({
        fields: {
          pick: ['id', 'nome'],
        },
      })
    )

    response.ok(result)
  }

  public async create({ auth, request, response }: HttpContextContract) {
    const user = await Usuario.find(auth.use('api').user?.id)

    if (!user) {
      response.notFound({ erro: 'Usuário não encontrado' })
      return
    }

    const client = await user.related('clientes').create(request.body())

    if (!client.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar criar cliente' })
      return
    }

    response.noContent()
  }

  public async update({ request, response }: HttpContextContract) {
    const client = await Cliente.find(request.param('id'))

    if (!client) {
      response.notFound({ erro: 'Cliente não encontrado' })
      return
    }

    await client.merge(request.body()).save()

    if (!client.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar alterar cliente' })
      return
    }

    response.noContent()
  }
}
