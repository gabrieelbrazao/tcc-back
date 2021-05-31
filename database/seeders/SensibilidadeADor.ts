import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SensibilidadeADor from 'App/Models/SensibilidadeADor'

export default class SensibilidadeADorSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await SensibilidadeADor.updateOrCreateMany(uniqueKey, [
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
