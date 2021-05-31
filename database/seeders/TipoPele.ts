import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TipoPele from 'App/Models/TipoPele'

export default class TipoPeleSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await TipoPele.updateOrCreateMany(uniqueKey, [
      {
        descricao: 'Eudérmica',
      },
      {
        descricao: 'Alípica',
      },
      {
        descricao: 'Lipídica',
      },
      {
        descricao: 'Seborreica',
      },
      {
        descricao: 'Mista',
      },
      {
        descricao: 'Hidratada',
      },
      {
        descricao: 'Desidratada',
      },
      {
        descricao: 'Ressecada',
      },
      {
        descricao: 'Acneica',
      },
    ])
  }
}
