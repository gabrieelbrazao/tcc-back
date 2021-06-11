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

  public async showByUser({ request, response }: HttpContextContract) {
    const clients = await Cliente.query().where('usuario_id', request.param('id'))

    const result = clients.map((client) =>
      client.serialize({
        fields: {
          pick: ['id', 'nome'],
        },
      })
    )

    response.ok(result)
  }

  public async create({ request, response }: HttpContextContract) {
    const user = await Usuario.find(request.param('id'))

    if (!user) {
      response.notFound({ erro: 'Usuário não encontrado' })
      return
    }

    if (request.body().email) {
      const emailExists = await Cliente.findBy('email', request.body().email)

      if (emailExists) {
        response.conflict({ erro: 'Este e-mail já está em uso' })
        return
      }
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

    if (request.body().email) {
      const emailExists = await Cliente.findBy('email', request.body().email)

      if (emailExists && emailExists.id !== client.id) {
        response.conflict({ erro: 'Este e-mail já está em uso' })
        return
      }
    }

    await client.merge(request.body()).save()

    if (!client.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar alterar cliente' })
      return
    }

    response.noContent()
  }
}
