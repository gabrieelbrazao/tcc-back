import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/Usuario'
import { ClientFactory } from './Cliente'

export const UserFactory = Factory.define(User, ({ faker }) => {
  faker.locale = 'pt_BR'

  return {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
  }
})
  .relation('clientes', () => ClientFactory)
  .build()
