import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AcneGrau from 'App/Models/AcneGrau'
import Estresse from 'App/Models/Estresse'
import Etnia from 'App/Models/Etnia'
import ExposicaoSolar from 'App/Models/ExposicaoSolar'
import Fotoenvelhecimento from 'App/Models/Fotoenvelhecimento'
import Fototipo from 'App/Models/Fototipo'
import FrequenciaAtividadesFisicas from 'App/Models/FrequenciaAtividadesFisicas'
import FuncaoIntestinal from 'App/Models/FuncaoIntestinal'
import PeleAoTato from 'App/Models/PeleAoTato'
import PeleSensibilidade from 'App/Models/PeleSensibilidade'
import SensibilidadeADor from 'App/Models/SensibilidadeADor'
import Sono from 'App/Models/Sono'
import TipoPele from 'App/Models/TipoPele'
import IauxResponse from 'App/Types/auxResponse'

export default class AuxController {
  public async index({ response }: HttpContextContract) {
    const result: IauxResponse = {}

    result.acneGrau = await AcneGrau.all()
    result.estresse = await Estresse.all()
    result.etnia = await Etnia.all()
    result.exposicaoSolar = await ExposicaoSolar.all()
    result.fotoenvelhecimento = await Fotoenvelhecimento.all()
    result.fototipo = await Fototipo.all()
    result.frequenciaAtividadesFisicas = await FrequenciaAtividadesFisicas.all()
    result.funcaoIntestinal = await FuncaoIntestinal.all()
    result.peleAoTato = await PeleAoTato.all()
    result.peleSensibilidade = await PeleSensibilidade.all()
    result.sensibilidadeADor = await SensibilidadeADor.all()
    result.sono = await Sono.all()
    result.tipoPele = await TipoPele.all()

    response.ok(result)
  }
}
