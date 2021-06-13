import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/Usuario'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    nome: faker.internet.userName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
  }
}).build()
