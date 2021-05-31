import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fototipo from 'App/Models/Fototipo'

export default class FototipoSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'descricao'

    await Fototipo.updateOrCreateMany(uniqueKey, [
      {
        descricao: 'I - caucasiano - pele muito clara, sempre queima, nunca bronzeia',
      },
      {
        descricao: 'II - branco - pele clara, sempre queima e algumas vezes bronzeia',
      },
      {
        descricao: 'III - moreno claro - pele menos clara, algumas vezes queima e sempre bronzeia',
      },
      {
        descricao: 'IV - moreno - pele morena clara, raramente queima e sempre bronzeia',
      },
      {
        descricao: 'V - mulato - pele morena escura, nunca queima e sempre bronzeia',
      },
      {
        descricao: 'VI - pele negra, nunca queima e sempre bronzeia',
      },
    ])
  }
}
