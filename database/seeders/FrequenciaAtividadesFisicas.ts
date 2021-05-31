import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FrequenciaAtividadesFisicas from 'App/Models/FrequenciaAtividadesFisicas'
import NotPluralStrategy from 'Contracts/namingStrategy'

export default class FrequenciaAtividadesFisicasSeeder extends BaseSeeder {
  public static namingStrategy = new NotPluralStrategy()

  public async run() {
    const uniqueKey = 'descricao'

    await FrequenciaAtividadesFisicas.updateOrCreateMany(uniqueKey, [
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
