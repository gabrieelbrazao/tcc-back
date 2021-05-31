import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fotoenvelhecimento from 'App/Models/Fotoenvelhecimento'

export default class FotoenvelhecimentoSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await Fotoenvelhecimento.updateOrCreateMany(uniqueKey, [
      {
        descricao: 'Tipo I - sem rugas (20 - 30 anos)',
      },
      {
        descricao: 'Tipo II - rugas somente com os movimentos (30 - 40 anos)',
      },
      {
        descricao: 'Tipo III - presença de rugas mesmo em repouso (40 - 50 anos)',
      },
      {
        descricao: 'Tipo IV - apenas as rugas dominam todo o rosto (acima de 60 anos)',
      },
    ])
  }
}
