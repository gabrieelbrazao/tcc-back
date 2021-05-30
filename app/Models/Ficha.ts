import { BaseModel, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { HasMany } from '@ioc:Adonis/Lucid/Relations'
import Consulta from './Consulta'

export default class Ficha extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public queixaPrincipal: string

  @column()
  public ginecologistaUltimaConsulta: string | null

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
  public usaRemediosParaDormir: string

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
  public usoDeCosmeticosMaquiagem: string | null

  @column()
  public cosmeticosSensibilidade: string | null

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

  @column()
  public data: Date

  @column()
  public assinaturaCliente: string

  @hasMany(() => Consulta)
  public consultas: HasMany<typeof Consulta>
}
