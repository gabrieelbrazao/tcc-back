import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import Usuario from 'App/Models/Usuario'
import Hash from '@ioc:Adonis/Core/Hash'
import Env from '@ioc:Adonis/Core/Env'
import { generate } from 'generate-password'

export default class UsuarioController {
  public async show({ response, auth }: HttpContextContract) {
    const user = await Usuario.find(auth.use('api').user?.id)

    if (!user) {
      response.notFound({ erro: 'Usuário não encontrado' })
      return
    }

    response.ok(user.serialize())
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const { email, senha: password } = request.qs()

    const user = await Usuario.findBy('email', email)

    if (!user) {
      response.notFound({ erro: 'Usuário não encontrado' })
      return
    }

    if (!(await Hash.verify(user.senha, password))) {
      response.unauthorized({ erro: 'Credenciais inválidas' })
      return
    }

    const token = await auth.use('api').generate(user, {
      expiresIn: '7days',
    })

    response.ok(token)
  }

  public async create({ request, response }: HttpContextContract) {
    const emailExists = await Usuario.findBy('email', request.body().email)

    if (emailExists) {
      response.conflict({ erro: 'Este e-mail já está em uso' })
      return
    }

    const user = await Usuario.create(request.body())

    if (!user.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar criar usuário' })
      return
    }

    response.noContent()
  }

  public async update({ request, response, auth }: HttpContextContract) {
    const user = await Usuario.find(auth.use('api').user?.id)

    if (!user) {
      response.notFound({ erro: 'Usuário não encontrado' })
      return
    }

    if (request.body().email) {
      const emailExists = await Usuario.findBy('email', request.body().email)

      if (emailExists && emailExists.id !== user.id) {
        response.conflict({ erro: 'Este e-mail já está em uso' })
        return
      }
    }

    await user.merge(request.body()).save()

    if (!user.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar alterar usuário' })
      return
    }

    response.noContent()
  }

  public async changePassword({ request, response }: HttpContextContract) {
    const user = await Usuario.find(request.param('id'))

    if (!user) {
      response.notFound({ erro: 'Usuário não encontrado' })
      return
    }

    const newPassword = generate({ numbers: true })

    await user.merge({ senha: newPassword }).save()

    if (!user.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar alterar senha do usuário' })
      return
    }

    await Mail.send((message) => {
      message
        .from(Env.get('SES_SENDER_EMAIL'))
        .to(user.email)
        .subject('Sua nova senha chegou!')
        .htmlView('emails/change_password', {
          name: user.nome,
          password: newPassword,
        })
    })

    response.noContent()
  }
}
