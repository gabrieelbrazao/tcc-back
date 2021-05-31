import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ExposicaoSolar from 'App/Models/ExposicaoSolar'

export default class ExposicaoSolarSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await ExposicaoSolar.updateOrCreateMany(uniqueKey, [
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
