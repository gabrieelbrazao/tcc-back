import Factory from '@ioc:Adonis/Lucid/Factory'
import Consulta from 'App/Models/Consulta'
import { RecordFactory } from './Ficha'

export const ConsultationFactory = Factory.define(Consulta, ({ faker }) => {
  faker.locale = 'pt_BR'

  return {
    esteticista: faker.name.findName(),
    assinaturaCliente: faker.image.imageUrl(),
  }
})
  .state('optionals', (consultation, { faker }) => {
    consultation.tratamentos = faker.lorem.sentence(10)
    consultation.observacoes = faker.lorem.sentence(10)
    consultation.orientacoes = faker.lorem.sentence(10)
  })
  .relation('ficha', () => RecordFactory)
  .build()
