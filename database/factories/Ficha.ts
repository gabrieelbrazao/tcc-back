import Factory from '@ioc:Adonis/Lucid/Factory'
import Ficha from 'App/Models/Ficha'
import { ClientFactory } from './Cliente'
import { ConsultationFactory } from './Consulta'

export const RecordFactory = Factory.define(Ficha, ({ faker }) => {
  faker.locale = 'pt_BR'

  return {
    queixaPrincipal: faker.lorem.sentence(10),
    cicloMenstrualNormal: faker.random.arrayElement(['S', 'N']),
    sop: faker.random.arrayElement(['S', 'N']),
    climaterio: faker.random.arrayElement(['S', 'N']),
    menopausa: faker.random.arrayElement(['S', 'N']),
    reposicaoHormonal: faker.random.arrayElement(['S', 'N']),
    gestante: faker.random.arrayElement(['S', 'N']),
    quantidadeGravidez: faker.datatype.number(10),
    quantidadeFilhos: faker.datatype.number(10),
    seiosNormais: faker.random.arrayElement(['S', 'N']),
    contraceptivosHormonais: faker.random.arrayElement(['S', 'N']),
    hirsutismo: faker.random.arrayElement(['S', 'N']),
    diabetes: faker.random.arrayElement(['S', 'N']),
    tireoide: faker.random.arrayElement(['S', 'N']),
    marcaPasso: faker.random.arrayElement(['S', 'N']),
    hipotensao: faker.random.arrayElement(['S', 'N']),
    hipertensao: faker.random.arrayElement(['S', 'N']),
    tratamentoDermatologico: faker.random.arrayElement(['S', 'N']),
    tratamentoDermatologicoAnterior: faker.random.arrayElement(['S', 'N']),
    ansiedade: faker.random.arrayElement(['S', 'N']),
    impaciencia: faker.random.arrayElement(['S', 'N']),
    depressao: faker.random.arrayElement(['S', 'N']),
    choqueEmocional: faker.random.arrayElement(['S', 'N']),
    usaAntidepressivos: faker.random.arrayElement(['S', 'N']),
    sonoId: faker.datatype.number({ min: 1, max: 4 }),
    usaRemediosParaDormir: faker.random.arrayElement(['S', 'N']),
    sensibilidadeADorId: faker.datatype.number({ min: 1, max: 4 }),
    estresseId: faker.datatype.number({ min: 1, max: 4 }),
    checkupsMedicosRegularmente: faker.random.arrayElement(['S', 'N']),
    medicamentosDores: faker.random.arrayElement(['S', 'N']),
    medicamentosEpilepsia: faker.random.arrayElement(['S', 'N']),
    medicamentosAntecedentesOncologicos: faker.random.arrayElement(['S', 'N']),
    medicamentosRetencaoHidrica: faker.random.arrayElement(['S', 'N']),
    medicamentosRosacea: faker.random.arrayElement(['S', 'N']),
    medicamentosLentesDeContato: faker.random.arrayElement(['S', 'N']),
    medicamentosTonturas: faker.random.arrayElement(['S', 'N']),
    medicamentosProblemasRenais: faker.random.arrayElement(['S', 'N']),
    medicamentosLupus: faker.random.arrayElement(['S', 'N']),
    medicamentosQueloides: faker.random.arrayElement(['S', 'N']),
    medicamentosImplanteDentario: faker.random.arrayElement(['S', 'N']),
    medicamentosFaltaDeAr: faker.random.arrayElement(['S', 'N']),
    medicamentosUsoDeCorticoides: faker.random.arrayElement(['S', 'N']),
    medicamentosPsoriase: faker.random.arrayElement(['S', 'N']),
    medicamentosDermatiteSeborreica: faker.random.arrayElement(['S', 'N']),
    medicamentosPlacasMetalicasFace: faker.random.arrayElement(['S', 'N']),
    frequenciaAtividadesFisicasId: faker.datatype.number({ min: 1, max: 4 }),
    alimentacao: faker.lorem.sentence(10),
    aguaQuantidade: faker.lorem.sentence(3),
    aguaCopos: faker.datatype.number(20),
    etilismo: faker.lorem.sentence(10),
    fumante: faker.random.arrayElement(['S', 'N']),
    funcaoIntestinalId: faker.datatype.number({ min: 1, max: 2 }),
    exposicaoSolarId: faker.datatype.number({ min: 1, max: 4 }),
    fototipoId: faker.datatype.number({ min: 1, max: 6 }),
    etniaId: faker.datatype.number({ min: 1, max: 5 }),
    tipoPeleId: faker.datatype.number({ min: 1, max: 9 }),
    peleAoTatoId: faker.datatype.number({ min: 1, max: 5 }),
    peleSensibilidadeId: faker.datatype.number({ min: 1, max: 4 }),
    acromias: faker.random.arrayElement(['S', 'N']),
    hipocromias: faker.random.arrayElement(['S', 'N']),
    efelides: faker.random.arrayElement(['S', 'N']),
    melasmas: faker.random.arrayElement(['S', 'N']),
    lentigos: faker.random.arrayElement(['S', 'N']),
    melanose: faker.random.arrayElement(['S', 'N']),
    hipercromiaPosTraumatica: faker.random.arrayElement(['S', 'N']),
    hipercromiaPosInflamatoria: faker.random.arrayElement(['S', 'N']),
    xantelasmas: faker.random.arrayElement(['S', 'N']),
    hiperplasiaSebacea: faker.random.arrayElement(['S', 'N']),
    cicatrizes: faker.random.arrayElement(['S', 'N']),
    seborreia: faker.random.arrayElement(['S', 'N']),
    flacidezMuscular: faker.random.arrayElement(['S', 'N']),
    comedoesCapilares: faker.random.arrayElement(['S', 'N']),
    eritemas: faker.random.arrayElement(['S', 'N']),
    verrugas: faker.random.arrayElement(['S', 'N']),
    queratosePilarFolicular: faker.random.arrayElement(['S', 'N']),
    asfitica: faker.random.arrayElement(['S', 'N']),
    ostiosDilatados: faker.random.arrayElement(['S', 'N']),
    flacidezTissular: faker.random.arrayElement(['S', 'N']),
    microcomedoes: faker.random.arrayElement(['S', 'N']),
    edemas: faker.random.arrayElement(['S', 'N']),
    nevos: faker.random.arrayElement(['S', 'N']),
    dermografismo: faker.random.arrayElement(['S', 'N']),
    talangiectasias: faker.random.arrayElement(['S', 'N']),
    miliuns: faker.random.arrayElement(['S', 'N']),
    escoriacoes: faker.random.arrayElement(['S', 'N']),
    comedoesAbertos: faker.random.arrayElement(['S', 'N']),
    hematomas: faker.random.arrayElement(['S', 'N']),
    fotoenvelhecimentoId: faker.datatype.number({ min: 1, max: 4 }),
    pustulas: faker.random.arrayElement(['S', 'N']),
    nodulos: faker.random.arrayElement(['S', 'N']),
    comedoesFechados: faker.random.arrayElement(['S', 'N']),
    papulas: faker.random.arrayElement(['S', 'N']),
    acneJuvenilVulgar: faker.random.arrayElement(['S', 'N']),
    acneTardia: faker.random.arrayElement(['S', 'N']),
    acneFamilia: faker.random.arrayElement(['S', 'N']),
    assinaturaCliente: faker.image.imageUrl(),
    imagemRosto: faker.image.imageUrl(),
    descricaoRosto: faker.lorem.sentence(3),
    ativo: faker.random.arrayElement(['S', 'N']),
  }
})
  .state('optionals', (record, { faker }) => {
    record.ginecologistaUltimaConsulta = faker.date.past().toISOString().split('T')[0]
    record.alteracoesCicloMenstrual = faker.lorem.sentence(10)
    record.primeiraMenstruacao = faker.date.past().toISOString().split('T')[0]
    record.ultimaMenstruacao = faker.date.past().toISOString().split('T')[0]
    record.mesesGestacao = faker.datatype.number(9)
    record.idadesFilhos = faker.lorem.sentence(3)
    record.seiosAlteracoes = faker.lorem.sentence(10)
    record.contraceptivosHormonaisTempo = faker.lorem.sentence(3)
    record.hirsutismoRepentino = faker.random.arrayElement(['S', 'N'])
    record.hirsutismoIdade = faker.lorem.sentence(3)
    record.cardiacoObservacoes = faker.lorem.sentence(10)
    record.alergias = faker.lorem.sentence(10)
    record.tratamentoDermatologicoJustificativa = faker.lorem.sentence(10)
    record.tratamentoDermatologicoEmUso = faker.lorem.sentence(10)
    record.tratamentoDermatologicoEmUsoTempo = faker.lorem.sentence(3)
    record.tratamentoDermatologicoAnteriorJustificativa = faker.lorem.sentence(10)
    record.tratamentoDermatologicoAnteriorUsado = faker.lorem.sentence(3)
    record.tratamentoDermatologicoAnteriorTempo = faker.lorem.sentence(3)
    record.antidepressivos = faker.lorem.sentence(10)
    record.enfermidadesAtuais = faker.lorem.sentence(10)
    record.enfermidadesAnteriores = faker.lorem.sentence(10)
    record.atividadesFisicas = faker.lorem.sentence(10)
    record.cigarrosDia = faker.datatype.number(30)
    record.fumanteInicio = faker.lorem.sentence(3)
    record.fumanteFim = faker.lorem.sentence(3)
    record.funcaoIntestinalObs = faker.lorem.sentence(10)
    record.informacoesComplementares = faker.lorem.sentence(10)
    record.tratamentosEsteticosAnteriores = faker.lorem.sentence(10)
    record.cirurgiaPlasticaFace = faker.lorem.sentence(10)
    record.cirurgiaPlasticaFaceTempo = faker.lorem.sentence(3)
    record.usoDeCosmeticosLimpeza = faker.lorem.sentence(10)
    record.usoDeCosmeticosEsfoliacao = faker.lorem.sentence(10)
    record.usoDeCosmeticosTonificacao = faker.lorem.sentence(10)
    record.usoDeCosmeticosAcidos = faker.lorem.sentence(10)
    record.usoDeCosmeticosHidratacao = faker.lorem.sentence(10)
    record.usoDeCosmeticosTratamentosEspecificos = faker.lorem.sentence(10)
    record.usoDeCosmeticosFotoprotecao = faker.lorem.sentence(10)
    record.usoDeCosmeticosMaquiagem = faker.lorem.sentence(10)
    record.cosmeticosSensibilidade = faker.lorem.sentence(10)
    record.peleSensibilidadeObservacao = faker.lorem.sentence(10)
    record.verrugasFrontal = faker.lorem.sentence(10)
    record.verrugasGlabela = faker.lorem.sentence(10)
    record.verrugasOrbicularOlhos = faker.lorem.sentence(10)
    record.verrugasOrbicularLabios = faker.lorem.sentence(10)
    record.verrugasLateralFace = faker.lorem.sentence(10)
    record.verrugasSulcoNasogeniano = faker.lorem.sentence(10)
    record.verrugasPescoco = faker.lorem.sentence(10)
    record.verrugasColo = faker.lorem.sentence(10)
    record.acneGrauId = faker.datatype.number({ min: 1, max: 4 })
    record.acneInicio = faker.lorem.sentence(3)
    record.acneEvolucao = faker.lorem.sentence(3)
    record.outrasConsideracoes = faker.lorem.sentence(10)
  })
  .relation('cliente', () => ClientFactory)
  .relation('consultas', () => ConsultationFactory)
  .build()
