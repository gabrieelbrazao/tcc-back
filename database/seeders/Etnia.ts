import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Etnia from 'App/Models/Etnia'

export default class EtniaSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await Etnia.updateOrCreateMany(uniqueKey, [
      {
        descricao: 'Branco',
      },
      {
        descricao: 'Amarelo (asiático)',
      },
      {
        descricao: 'Mulato',
      },
      {
        descricao: 'Negro',
      },
      {
        descricao: 'Indígena',
      },
    ])
  }
}
