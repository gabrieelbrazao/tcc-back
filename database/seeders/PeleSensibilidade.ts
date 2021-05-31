import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PeleSensibilidade from 'App/Models/PeleSensibilidade'

export default class PeleSensibilidadeSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await PeleSensibilidade.updateOrCreateMany(uniqueKey, [
      {
        descricao: 'Nenhuma',
      },
      {
        descricao: 'Pouca',
      },
      {
        descricao: 'Média',
      },
      {
        descricao: 'Muita',
      },
    ])
  }
}
