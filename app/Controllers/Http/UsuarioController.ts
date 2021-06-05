import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import Usuario from 'App/Models/Usuario'
import Hash from '@ioc:Adonis/Core/Hash'
import { generate } from 'generate-password'

export default class UsuarioController {
  public async show({ request, response }: HttpContextContract) {
    const email = request.qs().email
    const password = request.qs().senha

    const user = await Usuario.findBy('email', email)

    if (!user) {
      response.status(404).json({ erro: 'Usuário não encontrado' })
      return
    }

    if (!(await Hash.verify(user.senha, password))) {
      response.status(401).json({ erro: 'Credenciais inválidas' })
      return
    }

    response.status(200).json({ id: user.id, email: user.email, nome: user.nome })
  }

  public async create({ request, response }: HttpContextContract) {
    const name = request.body().nome
    const email = request.body().email
    const password = request.body().senha

    const user = new Usuario()

    user.nome = name
    user.email = email
    user.senha = password

    await user.save()

    if (!user.$isPersisted) {
      response.status(500).json({ erro: 'Erro ao tentar criar usuário' })
      return
    }

    response.status(201).json({ id: user.id })
  }

  public async update({ request, response }: HttpContextContract) {
    const name = request.body().nome
    const email = request.body().email
    const password = request.body().senha

    const id = request.param('id')
    const user = await Usuario.find(id)

    if (!user) {
      response.status(404).json({ erro: 'Usuário não encontrado' })
      return
    }

    user.nome = name
    user.email = email
    user.senha = password

    await user.save()

    if (!user.$isPersisted) {
      response.status(500).json({ erro: 'Erro ao tentar alterar usuário' })
      return
    }

    response.status(204)
  }

  public async changePassword({ request, response }: HttpContextContract) {
    const id = request.param('id')

    const user = await Usuario.find(id)

    if (!user) {
      response.status(404).json({ erro: 'Usuário não encontrado' })
      return
    }

    const newPassword = generate({ numbers: true })

    user.senha = newPassword

    await user.save()

    if (!user.$isPersisted) {
      response.status(500).json({ erro: 'Erro ao tentar alterar senha do usuário' })
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

    response.status(204)
  }
}
