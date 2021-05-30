import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FrequenciaAtividadesFisica from 'App/Models/FrequenciaAtividadesFisicas'

export default class FrequenciaAtividadesFisicaSeeder extends BaseSeeder {
  public async run() {
    FrequenciaAtividadesFisica.createMany([
      {
        descricao: 'Nenhuma',
      },
      {
        descricao: 'Esporádica',
      },
      {
        descricao: 'Regular',
      },
      {
        descricao: 'Diária',
      },
    ])
  }
}
