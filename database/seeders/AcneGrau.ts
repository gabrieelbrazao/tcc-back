import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import AcneGrau from 'App/Models/AcneGrau'

export default class AcneGrauSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await AcneGrau.updateOrCreateMany(uniqueKey, [
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
