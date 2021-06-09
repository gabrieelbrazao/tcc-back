import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import Usuario from 'App/Models/Usuario'

export default class ClienteController {
  public async showById({ request, response }: HttpContextContract) {
    const client = await Cliente.find(request.param('id'))

    if (!client) {
      response.status(404).json({ erro: 'Cliente não encontrado' })
      return
    }

    response.status(200).json(client.serialize())
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

    response.status(200).json(result)
  }

  public async create({ request, response }: HttpContextContract) {
    const user = await Usuario.find(request.param('id'))

    if (!user) {
      response.status(404).json({ erro: 'Usuário não encontrado' })
      return
    }

    if (request.body().email) {
      const emailExists = await Cliente.findBy('email', request.body().email)

      if (emailExists) {
        response.status(409).json({ erro: 'Este e-mail já está em uso' })
        return
      }
    }

    request.body().dataNascimento = new Date(request.body().dataNascimento)

    const client = await user.related('clientes').create(request.body())

    if (!client.$isPersisted) {
      response.status(500).json({ erro: 'Erro ao tentar criar cliente' })
      return
    }

    response.status(204)
  }

  public async update({ request, response }: HttpContextContract) {
    const client = await Cliente.find(request.param('id'))

    if (!client) {
      response.status(404).json({ erro: 'Cliente não encontrado' })
      return
    }

    if (request.body().email) {
      const emailExists = await Cliente.findBy('email', request.body().email)

      if (emailExists && emailExists.id !== client.id) {
        response.status(409).json({ erro: 'Este e-mail já está em uso' })
        return
      }
    }

    if (request.body().dataNascimento)
      request.body().dataNascimento = new Date(request.body().dataNascimento)

    await client.merge(request.body()).save()

    if (!client.$isPersisted) {
      response.status(500).json({ erro: 'Erro ao tentar alterar cliente' })
      return
    }

    response.status(204)
  }
}
