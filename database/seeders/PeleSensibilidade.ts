import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PeleSensibilidade from 'App/Models/PeleSensibilidade'

export default class PeleSensibilidadeSeeder extends BaseSeeder {
  public async run() {
    PeleSensibilidade.createMany([
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
