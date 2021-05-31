import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PeleAoTato from 'App/Models/PeleAoTato'

export default class PeleAoTatoSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await PeleAoTato.updateOrCreateMany(uniqueKey, [
      {
        descricao: 'Muito fina',
      },
      {
        descricao: 'Fina',
      },
      {
        descricao: 'Grossa',
      },
      {
        descricao: 'Lisa',
      },
      {
        descricao: 'Áspera',
      },
    ])
  }
}
