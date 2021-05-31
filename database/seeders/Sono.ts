import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sono from 'App/Models/Sono'

export default class SonoSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await Sono.updateOrCreateMany(uniqueKey, [
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
