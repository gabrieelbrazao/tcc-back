import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import Usuario from 'App/Models/Usuario'
import Hash from '@ioc:Adonis/Core/Hash'
import { generate } from 'generate-password'

export default class UsuarioController {
  public async login({ request, response }: HttpContextContract) {
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

    response.ok(user.serialize())
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

  public async update({ request, response }: HttpContextContract) {
    const user = await Usuario.find(request.param('id'))

    if (!user) {
      response.notFound({ erro: 'Usuário não encontrado' })
      return
    }

    if (request.body().email) {
      const emailExists = await Usuario.findBy('email', request.body().email)

      if (emailExists) {
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
        .from('FichasAnamnese@software.com')
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
