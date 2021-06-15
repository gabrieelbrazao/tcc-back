import Factory from '@ioc:Adonis/Lucid/Factory'
import Cliente from 'App/Models/Cliente'
import { UserFactory } from './Usuario'

export const ClientFactory = Factory.define(Cliente, ({ faker }) => {
  faker.locale = 'pt_BR'

  return {
    nome: faker.name.findName(),
    endereco: faker.address.streetName(),
    bairro: faker.address.cityName(),
    cidade: faker.address.cityName(),
    estado: faker.address.stateAbbr(),
    profissao: faker.name.jobTitle(),
    estadoCivil: faker.lorem.word(),
    dataNascimento: faker.date.past(),
    ativo: faker.random.arrayElement(['S', 'N']),
  }
})
  .state('optionals', (client, { faker }) => {
    client.foneResidencial = faker.phone.phoneNumber('##########')
    client.foneComercial = faker.phone.phoneNumber('###########')
    client.celular = faker.phone.phoneNumber('###########')
    client.email = faker.internet.email()
    client.cep = faker.address.zipCode().replace('-', '')
  })
  .relation('usuario', () => UserFactory)
  .build()
