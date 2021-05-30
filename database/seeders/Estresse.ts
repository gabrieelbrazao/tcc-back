import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Estresse from 'App/Models/Estresse'

export default class EstresseSeeder extends BaseSeeder {
  public async run() {
    Estresse.createMany([
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
