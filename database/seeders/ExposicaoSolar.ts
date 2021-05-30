import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ExposicaoSolar from 'App/Models/ExposicaoSolar'

export default class ExposicaoSolarSeeder extends BaseSeeder {
  public async run() {
    ExposicaoSolar.createMany([
      {
        descricao: 'Nunca',
      },
      {
        descricao: 'Raramente',
      },
      {
        descricao: 'Frequente',
      },
      {
        descricao: 'Intensa',
      },
    ])
  }
}
