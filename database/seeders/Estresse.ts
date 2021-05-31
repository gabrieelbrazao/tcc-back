import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Estresse from 'App/Models/Estresse'

export default class EstresseSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await Estresse.updateOrCreateMany(uniqueKey, [
      {
        descricao: 'Normal',
      },
      {
        descricao: 'Pouco',
      },
      {
        descricao: 'Médio',
      },
      {
        descricao: 'Muito',
      },
    ])
  }
}
