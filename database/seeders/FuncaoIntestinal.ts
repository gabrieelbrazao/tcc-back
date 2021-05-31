import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FuncaoIntestinal from 'App/Models/FuncaoIntestinal'

export default class FuncaoIntestinalSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await FuncaoIntestinal.updateOrCreateMany(uniqueKey, [
      {
        descricao: 'Regular',
      },
      {
        descricao: 'Ruim',
      },
    ])
  }
}
