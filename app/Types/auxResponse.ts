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

export default interface IauxResponse {
  acneGrau?: AcneGrau[]
  estresse?: Estresse[]
  etnia?: Etnia[]
  exposicaoSolar?: ExposicaoSolar[]
  fotoenvelhecimento?: Fotoenvelhecimento[]
  fototipo?: Fototipo[]
  frequenciaAtividadesFisicas?: FrequenciaAtividadesFisicas[]
  funcaoIntestinal?: FuncaoIntestinal[]
  peleAoTato?: PeleAoTato[]
  peleSensibilidade?: PeleSensibilidade[]
  sensibilidadeADor?: SensibilidadeADor[]
  sono?: Sono[]
  tipoPele?: TipoPele[]
}
