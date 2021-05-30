import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AcneGrau from 'App/Models/AcneGrau'

export default class AcneGrauSeeder extends BaseSeeder {
  public async run() {
    AcneGrau.createMany([
      {
        descricao: 'Grau I',
      },
      {
        descricao: 'Grau II',
      },
      {
        descricao: 'Grau III',
      },
      {
        descricao: 'Grau IV',
      },
    ])
  }
}
