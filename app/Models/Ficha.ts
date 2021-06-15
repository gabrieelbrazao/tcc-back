import { BaseModel, belongsTo, BelongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import AcneGrau from './AcneGrau'
import Cliente from './Cliente'
import Consulta from './Consulta'
import Estresse from './Estresse'
import Etnia from './Etnia'
import ExposicaoSolar from './ExposicaoSolar'
import Fotoenvelhecimento from './Fotoenvelhecimento'
import Fototipo from './Fototipo'
import FrequenciaAtividadesFisicas from './FrequenciaAtividadesFisicas'
import FuncaoIntestinal from './FuncaoIntestinal'
import PeleAoTato from './PeleAoTato'
import PeleSensibilidade from './PeleSensibilidade'
import SensibilidadeADor from './SensibilidadeADor'
import Sono from './Sono'
import TipoPele from './TipoPele'

export default class Ficha extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public queixaPrincipal: string

  @column()
  public ginecologistaUltimaConsulta: Date | null

  @column()
  public cicloMenstrualNormal: string

  @column()
  public alteracoesCicloMenstrual: string | null

  @column()
  public primeiraMenstruacao: Date | null

  @column()
  public ultimaMenstruacao: Date | null

  @column()
  public sop: string

  @column()
  public climaterio: string

  @column()
  public menopausa: string

  @column()
  public reposicaoHormonal: string

  @column()
  public gestante: string

  @column()
  public mesesGestacao: number | null

  @column()
  public quantidadeGravidez: number

  @column()
  public quantidadeFilhos: number

  @column()
  public idadesFilhos: string | null

  @column()
  public seiosNormais: string

  @column()
  public seiosAlteracoes: string | null

  @column()
  public contraceptivosHormonais: string

  @column()
  public contraceptivosHormonaisTempo: string | null

  @column()
  public hirsutismo: string

  @column()
  public hirsutismoRepentino: string | null

  @column()
  public hirsutismoIdade: string | null

  @column()
  public diabetes: string

  @column()
  public tireoide: string

  @column()
  public marcaPasso: string

  @column()
  public cardiacoObservacoes: string | null

  @column()
  public hipotensao: string

  @column()
  public hipertensao: string

  @column()
  public alergias: string | null

  @column()
  public tratamentoDermatologico: string

  @column()
  public tratamentoDermatologicoJustificativa: string | null

  @column()
  public tratamentoDermatologicoEmUso: string | null

  @column()
  public tratamentoDermatologicoEmUsoTempo: string | null

  @column()
  public tratamentoDermatologicoAnterior: string

  @column()
  public tratamentoDermatologicoAnteriorJustificativa: string | null

  @column()
  public tratamentoDermatologicoAnteriorUsado: string | null

  @column()
  public tratamentoDermatologicoAnteriorTempo: string | null

  @column()
  public ansiedade: string

  @column()
  public impaciencia: string

  @column()
  public depressao: string

  @column()
  public choqueEmocional: string

  @column()
  public usaAntidepressivos: string

  @column()
  public antidepressivos: string

  @column()
  public sonoId: number

  @belongsTo(() => Sono)
  public sono: BelongsTo<typeof Sono>

  @column()
  public usaRemediosParaDormir: string

  @column()
  public sensibilidadeADorId: number

  @belongsTo(() => SensibilidadeADor)
  public sensibilidadeADor: BelongsTo<typeof SensibilidadeADor>

  @column()
  public estresseId: number

  @belongsTo(() => Estresse)
  public estresse: BelongsTo<typeof Estresse>

  @column()
  public checkupsMedicosRegularmente: string

  @column()
  public enfermidadesAtuais: string | null

  @column()
  public enfermidadesAnteriores: string | null

  @column()
  public medicamentosDores: string

  @column()
  public medicamentosEpilepsia: string

  @column()
  public medicamentosAntecedentesOncologicos: string

  @column()
  public medicamentosRetencaoHidrica: string

  @column()
  public medicamentosRosacea: string

  @column()
  public medicamentosLentesDeContato: string

  @column()
  public medicamentosTonturas: string

  @column()
  public medicamentosProblemasRenais: string

  @column()
  public medicamentosLupus: string

  @column()
  public medicamentosQueloides: string

  @column()
  public medicamentosImplanteDentario: string

  @column()
  public medicamentosFaltaDeAr: string

  @column()
  public medicamentosUsoDeCorticoides: string

  @column()
  public medicamentosPsoriase: string

  @column()
  public medicamentosDermatiteSeborreica: string

  @column()
  public medicamentosPlacasMetalicasFace: string

  @column()
  public frequenciaAtividadesFisicasId: number

  @belongsTo(() => FrequenciaAtividadesFisicas)
  public frequenciaAtividadesFisicas: BelongsTo<typeof FrequenciaAtividadesFisicas>

  @column()
  public atividadesFisicas: string | null

  @column()
  public alimentacao: string

  @column()
  public aguaQuantidade: string

  @column()
  public aguaCopos: number

  @column()
  public etilismo: string

  @column()
  public fumante: string

  @column()
  public cigarrosDia: number | null

  @column()
  public fumanteInicio: string | null

  @column()
  public fumanteFim: string | null

  @column()
  public funcaoIntestinalId: number

  @belongsTo(() => FuncaoIntestinal)
  public funcaoIntestinal: BelongsTo<typeof FuncaoIntestinal>

  @column()
  public funcaoIntestinalObs: string | null

  @column()
  public informacoesComplementares: string | null

  @column()
  public tratamentosEsteticosAnteriores: string | null

  @column()
  public cirurgiaPlasticaFace: string | null

  @column()
  public cirurgiaPlasticaFaceTempo: string | null

  @column()
  public usoDeCosmeticosLimpeza: string | null

  @column()
  public usoDeCosmeticosEsfoliacao: string | null

  @column()
  public usoDeCosmeticosTonificacao: string | null

  @column()
  public usoDeCosmeticosAcidos: string | null

  @column()
  public usoDeCosmeticosHidratacao: string | null

  @column()
  public usoDeCosmeticosTratamentosEspecificos: string | null

  @column()
  public usoDeCosmeticosFotoprotecao: string | null

  @column()
  public exposicaoSolarId: number

  @belongsTo(() => ExposicaoSolar)
  public exposicaoSolar: BelongsTo<typeof ExposicaoSolar>

  @column()
  public usoDeCosmeticosMaquiagem: string | null

  @column()
  public cosmeticosSensibilidade: string | null

  @column()
  public fototipoId: number

  @belongsTo(() => Fototipo)
  public fototipo: BelongsTo<typeof Fototipo>

  @column()
  public etniaId: number

  @belongsTo(() => Etnia)
  public etnia: BelongsTo<typeof Etnia>

  @column()
  public tipoPeleId: number

  @belongsTo(() => TipoPele)
  public tipoPele: BelongsTo<typeof TipoPele>

  @column()
  public peleAoTatoId: number

  @belongsTo(() => PeleAoTato)
  public peleAoTato: BelongsTo<typeof PeleAoTato>

  @column()
  public peleSensibilidadeId: number

  @belongsTo(() => PeleSensibilidade)
  public peleSensibilidade: BelongsTo<typeof PeleSensibilidade>

  @column()
  public peleSensibilidadeObservacao: string | null

  @column()
  public acromias: string

  @column()
  public hipocromias: string

  @column()
  public efelides: string

  @column()
  public melasmas: string

  @column()
  public lentigos: string

  @column()
  public melanose: string

  @column()
  public hipercromiaPosTraumatica: string

  @column()
  public hipercromiaPosInflamatoria: string

  @column()
  public xantelasmas: string

  @column()
  public hiperplasiaSebacea: string

  @column()
  public cicatrizes: string

  @column()
  public seborreia: string

  @column()
  public flacidezMuscular: string

  @column()
  public comedoesCapilares: string

  @column()
  public eritemas: string

  @column()
  public verrugas: string

  @column()
  public queratosePilarFolicular: string

  @column()
  public asfitica: string

  @column()
  public ostiosDilatados: string

  @column()
  public flacidezTissular: string

  @column()
  public microcomedoes: string

  @column()
  public edemas: string

  @column()
  public nevos: string

  @column()
  public dermografismo: string

  @column()
  public talangiectasias: string

  @column()
  public miliuns: string

  @column()
  public escoriacoes: string

  @column()
  public comedoesAbertos: string

  @column()
  public hematomas: string

  @column()
  public fotoenvelhecimentoId: number

  @belongsTo(() => Fotoenvelhecimento)
  public fotoenvelhecimento: BelongsTo<typeof Fotoenvelhecimento>

  @column()
  public verrugasFrontal: string | null

  @column()
  public verrugasGlabela: string | null

  @column()
  public verrugasOrbicularOlhos: string | null

  @column()
  public verrugasOrbicularLabios: string | null

  @column()
  public verrugasLateralFace: string | null

  @column()
  public verrugasSulcoNasogeniano: string | null

  @column()
  public verrugasPescoco: string | null

  @column()
  public verrugasColo: string | null

  @column()
  public pustulas: string

  @column()
  public nodulos: string

  @column()
  public comedoesFechados: string

  @column()
  public papulas: string

  @column()
  public acneGrauId: number

  @belongsTo(() => AcneGrau)
  public acneGrau: BelongsTo<typeof AcneGrau>

  @column()
  public acneJuvenilVulgar: string

  @column()
  public acneTardia: string

  @column()
  public acneFamilia: string

  @column()
  public acneInicio: string | null

  @column()
  public acneEvolucao: string | null

  @column()
  public outrasConsideracoes: string | null

  @column.dateTime({ autoCreate: true })
  public data: DateTime

  @column()
  public assinaturaCliente: string

  @column()
  public imagemRosto: string

  @column()
  public ativo: string

  @column()
  public clienteId: number

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @hasMany(() => Consulta)
  public consultas: HasMany<typeof Consulta>
}
