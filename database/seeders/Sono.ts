import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sono from 'App/Models/Sono'

export default class SonoSeeder extends BaseSeeder {
  public async run() {
    Sono.createMany([
      {
        descricao: 'Bom',
      },
      {
        descricao: 'Regular',
      },
      {
        descricao: 'Ruim',
      },
      {
        descricao: 'Insônia',
      },
    ])
  }
}
