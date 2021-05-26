// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class UsuariosController {
  public async changePassword() {
    await Mail.send((message) => {
      message
        .from('info@example.com')
        .to('gabrieelbrazao@gmail.com')
        .subject('Welcome Onboard!')
        .htmlView('emails/change_password')
    })
  }
}
