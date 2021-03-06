import IgetTokenResponse from 'App/Types/getTokenResponse'
import { ClientFactory } from 'Database/factories/Cliente'
import { RecordFactory } from 'Database/factories/Ficha'
import { UserFactory } from 'Database/factories/Usuario'
import test from 'japa'
import supertest from 'supertest'

test.group('Ficha', () => {
  const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

  const getToken = async ({ getUserId }) => {
    const user = await UserFactory.make()
    const password = user.senha

    await user.save()

    const { text } = await supertest(BASE_URL).get('/user/login').query({
      email: user.email,
      senha: password,
    })

    const response: IgetTokenResponse = { token: JSON.parse(text).token }

    if (getUserId) response.userId = user.id

    return response
  }

  test('Deverá adicionar uma ficha no banco de dados', async () => {
    const client = await ClientFactory.with('usuario').create()

    const record = await RecordFactory.apply('optionals').make()

    const { token } = await getToken({ getUserId: false })

    await supertest(BASE_URL)
      .post('/record')
      .field('queixaPrincipal', record.queixaPrincipal)
      .field('ginecologistaUltimaConsulta', record.ginecologistaUltimaConsulta!)
      .field('cicloMenstrualNormal', record.cicloMenstrualNormal)
      .field('alteracoesCicloMenstrual', record.alteracoesCicloMenstrual!)
      .field('primeiraMenstruacao', record.primeiraMenstruacao!)
      .field('ultimaMenstruacao', record.ultimaMenstruacao!)
      .field('sop', record.sop)
      .field('climaterio', record.climaterio)
      .field('menopausa', record.menopausa)
      .field('reposicaoHormonal', record.reposicaoHormonal)
      .field('gestante', record.gestante)
      .field('mesesGestacao', record.mesesGestacao!)
      .field('quantidadeGravidez', record.quantidadeGravidez)
      .field('quantidadeFilhos', record.quantidadeFilhos)
      .field('idadesFilhos', record.idadesFilhos!)
      .field('seiosNormais', record.seiosNormais)
      .field('seiosAlteracoes', record.seiosAlteracoes!)
      .field('contraceptivosHormonais', record.contraceptivosHormonais)
      .field('contraceptivosHormonaisTempo', record.contraceptivosHormonaisTempo!)
      .field('hirsutismo', record.hirsutismo)
      .field('hirsutismoRepentino', record.hirsutismoRepentino!)
      .field('hirsutismoIdade', record.hirsutismoIdade!)
      .field('diabetes', record.diabetes)
      .field('tireoide', record.tireoide)
      .field('marcaPasso', record.marcaPasso)
      .field('cardiacoObservacoes', record.cardiacoObservacoes!)
      .field('hipotensao', record.hipotensao)
      .field('hipertensao', record.hipertensao)
      .field('alergias', record.alergias!)
      .field('tratamentoDermatologico', record.tratamentoDermatologico)
      .field('tratamentoDermatologicoJustificativa', record.tratamentoDermatologicoJustificativa!)
      .field('tratamentoDermatologicoEmUso', record.tratamentoDermatologicoEmUso!)
      .field('tratamentoDermatologicoEmUsoTempo', record.tratamentoDermatologicoEmUsoTempo!)
      .field('tratamentoDermatologicoAnterior', record.tratamentoDermatologicoAnterior)
      .field(
        'tratamentoDermatologicoAnteriorJustificativa',
        record.tratamentoDermatologicoAnteriorJustificativa!
      )
      .field('tratamentoDermatologicoAnteriorUsado', record.tratamentoDermatologicoAnteriorUsado!)
      .field('tratamentoDermatologicoAnteriorTempo', record.tratamentoDermatologicoAnteriorTempo!)
      .field('ansiedade', record.ansiedade)
      .field('impaciencia', record.impaciencia)
      .field('depressao', record.depressao)
      .field('choqueEmocional', record.choqueEmocional)
      .field('usaAntidepressivos', record.usaAntidepressivos)
      .field('antidepressivos', record.antidepressivos!)
      .field('sonoId', record.sonoId)
      .field('usaRemediosParaDormir', record.usaRemediosParaDormir)
      .field('sensibilidadeADorId', record.sensibilidadeADorId)
      .field('estresseId', record.estresseId)
      .field('checkupsMedicosRegularmente', record.checkupsMedicosRegularmente)
      .field('enfermidadesAtuais', record.enfermidadesAtuais!)
      .field('enfermidadesAnteriores', record.enfermidadesAnteriores!)
      .field('medicamentosDores', record.medicamentosDores)
      .field('medicamentosEpilepsia', record.medicamentosEpilepsia)
      .field('medicamentosAntecedentesOncologicos', record.medicamentosAntecedentesOncologicos)
      .field('medicamentosRetencaoHidrica', record.medicamentosRetencaoHidrica)
      .field('medicamentosRosacea', record.medicamentosRosacea)
      .field('medicamentosLentesDeContato', record.medicamentosLentesDeContato)
      .field('medicamentosTonturas', record.medicamentosTonturas)
      .field('medicamentosProblemasRenais', record.medicamentosProblemasRenais)
      .field('medicamentosLupus', record.medicamentosLupus)
      .field('medicamentosQueloides', record.medicamentosQueloides)
      .field('medicamentosImplanteDentario', record.medicamentosImplanteDentario)
      .field('medicamentosFaltaDeAr', record.medicamentosFaltaDeAr)
      .field('medicamentosUsoDeCorticoides', record.medicamentosUsoDeCorticoides)
      .field('medicamentosPsoriase', record.medicamentosPsoriase)
      .field('medicamentosDermatiteSeborreica', record.medicamentosDermatiteSeborreica)
      .field('medicamentosPlacasMetalicasFace', record.medicamentosPlacasMetalicasFace)
      .field('frequenciaAtividadesFisicasId', record.frequenciaAtividadesFisicasId)
      .field('atividadesFisicas', record.atividadesFisicas!)
      .field('alimentacao', record.alimentacao)
      .field('aguaQuantidade', record.aguaQuantidade)
      .field('aguaCopos', record.aguaCopos)
      .field('etilismo', record.etilismo)
      .field('fumante', record.fumante)
      .field('cigarrosDia', record.cigarrosDia!)
      .field('fumanteInicio', record.fumanteInicio!)
      .field('fumanteFim', record.fumanteFim!)
      .field('funcaoIntestinalId', record.funcaoIntestinalId)
      .field('funcaoIntestinalObs', record.funcaoIntestinalObs!)
      .field('informacoesComplementares', record.informacoesComplementares!)
      .field('tratamentosEsteticosAnteriores', record.tratamentosEsteticosAnteriores!)
      .field('cirurgiaPlasticaFace', record.cirurgiaPlasticaFace!)
      .field('cirurgiaPlasticaFaceTempo', record.cirurgiaPlasticaFaceTempo!)
      .field('usoDeCosmeticosLimpeza', record.usoDeCosmeticosLimpeza!)
      .field('usoDeCosmeticosEsfoliacao', record.usoDeCosmeticosEsfoliacao!)
      .field('usoDeCosmeticosTonificacao', record.usoDeCosmeticosTonificacao!)
      .field('usoDeCosmeticosAcidos', record.usoDeCosmeticosAcidos!)
      .field('usoDeCosmeticosHidratacao', record.usoDeCosmeticosHidratacao!)
      .field('usoDeCosmeticosTratamentosEspecificos', record.usoDeCosmeticosTratamentosEspecificos!)
      .field('usoDeCosmeticosFotoprotecao', record.usoDeCosmeticosFotoprotecao!)
      .field('exposicaoSolarId', record.exposicaoSolarId)
      .field('usoDeCosmeticosMaquiagem', record.usoDeCosmeticosMaquiagem!)
      .field('cosmeticosSensibilidade', record.cosmeticosSensibilidade!)
      .field('fototipoId', record.fototipoId)
      .field('etniaId', record.etniaId)
      .field('tipoPeleId', record.tipoPeleId)
      .field('peleAoTatoId', record.peleAoTatoId)
      .field('peleSensibilidadeId', record.peleSensibilidadeId)
      .field('peleSensibilidadeObservacao', record.peleSensibilidadeObservacao!)
      .field('acromias', record.acromias)
      .field('hipocromias', record.hipocromias)
      .field('efelides', record.efelides)
      .field('melasmas', record.melasmas)
      .field('lentigos', record.lentigos)
      .field('melanose', record.melanose)
      .field('hipercromiaPosTraumatica', record.hipercromiaPosTraumatica)
      .field('hipercromiaPosInflamatoria', record.hipercromiaPosInflamatoria)
      .field('xantelasmas', record.xantelasmas)
      .field('hiperplasiaSebacea', record.hiperplasiaSebacea)
      .field('cicatrizes', record.cicatrizes)
      .field('seborreia', record.seborreia)
      .field('flacidezMuscular', record.flacidezMuscular)
      .field('comedoesCapilares', record.comedoesCapilares)
      .field('eritemas', record.eritemas)
      .field('verrugas', record.verrugas)
      .field('queratosePilarFolicular', record.queratosePilarFolicular)
      .field('asfitica', record.asfitica)
      .field('ostiosDilatados', record.ostiosDilatados)
      .field('flacidezTissular', record.flacidezTissular)
      .field('microcomedoes', record.microcomedoes)
      .field('edemas', record.edemas)
      .field('nevos', record.nevos)
      .field('dermografismo', record.dermografismo)
      .field('talangiectasias', record.talangiectasias)
      .field('miliuns', record.miliuns)
      .field('escoriacoes', record.escoriacoes)
      .field('comedoesAbertos', record.comedoesAbertos)
      .field('hematomas', record.hematomas)
      .field('fotoenvelhecimentoId', record.fotoenvelhecimentoId)
      .field('verrugasFrontal', record.verrugasFrontal!)
      .field('verrugasGlabela', record.verrugasGlabela!)
      .field('verrugasOrbicularOlhos', record.verrugasOrbicularOlhos!)
      .field('verrugasOrbicularLabios', record.verrugasOrbicularLabios!)
      .field('verrugasLateralFace', record.verrugasLateralFace!)
      .field('verrugasSulcoNasogeniano', record.verrugasSulcoNasogeniano!)
      .field('verrugasPescoco', record.verrugasPescoco!)
      .field('verrugasColo', record.verrugasColo!)
      .field('pustulas', record.pustulas)
      .field('nodulos', record.nodulos)
      .field('comedoesFechados', record.comedoesFechados)
      .field('papulas', record.papulas)
      .field('acneGrauId', record.acneGrauId!)
      .field('acneJuvenilVulgar', record.acneJuvenilVulgar)
      .field('acneTardia', record.acneTardia)
      .field('acneFamilia', record.acneFamilia)
      .field('acneInicio', record.acneInicio!)
      .field('acneEvolucao', record.acneEvolucao!)
      .field('outrasConsideracoes', record.outrasConsideracoes!)
      .field('ativo', record.ativo)
      .field('clienteId', client.id)
      .field('descricaoRosto', record.descricaoRosto)
      .attach('assinaturaCliente', './test/testFile.txt')
      .attach('imagemRosto', './test/testFile.txt')
      .auth(token, { type: 'bearer' })
      .expect(204)
  }).timeout(5000)

  test('Deverá adicionar uma ficha sem campos opcionais no banco de dados', async () => {
    const client = await ClientFactory.with('usuario').create()

    const record = await RecordFactory.make()

    const { token } = await getToken({ getUserId: false })

    await supertest(BASE_URL)
      .post('/record')
      .field('queixaPrincipal', record.queixaPrincipal)
      .field('cicloMenstrualNormal', record.cicloMenstrualNormal)
      .field('sop', record.sop)
      .field('climaterio', record.climaterio)
      .field('menopausa', record.menopausa)
      .field('reposicaoHormonal', record.reposicaoHormonal)
      .field('gestante', record.gestante)
      .field('quantidadeGravidez', record.quantidadeGravidez)
      .field('quantidadeFilhos', record.quantidadeFilhos)
      .field('seiosNormais', record.seiosNormais)
      .field('contraceptivosHormonais', record.contraceptivosHormonais)
      .field('hirsutismo', record.hirsutismo)
      .field('diabetes', record.diabetes)
      .field('tireoide', record.tireoide)
      .field('marcaPasso', record.marcaPasso)
      .field('hipotensao', record.hipotensao)
      .field('hipertensao', record.hipertensao)
      .field('tratamentoDermatologico', record.tratamentoDermatologico)
      .field('tratamentoDermatologicoAnterior', record.tratamentoDermatologicoAnterior)
      .field('ansiedade', record.ansiedade)
      .field('impaciencia', record.impaciencia)
      .field('depressao', record.depressao)
      .field('choqueEmocional', record.choqueEmocional)
      .field('usaAntidepressivos', record.usaAntidepressivos)
      .field('sonoId', record.sonoId)
      .field('usaRemediosParaDormir', record.usaRemediosParaDormir)
      .field('sensibilidadeADorId', record.sensibilidadeADorId)
      .field('estresseId', record.estresseId)
      .field('checkupsMedicosRegularmente', record.checkupsMedicosRegularmente)
      .field('medicamentosDores', record.medicamentosDores)
      .field('medicamentosEpilepsia', record.medicamentosEpilepsia)
      .field('medicamentosAntecedentesOncologicos', record.medicamentosAntecedentesOncologicos)
      .field('medicamentosRetencaoHidrica', record.medicamentosRetencaoHidrica)
      .field('medicamentosRosacea', record.medicamentosRosacea)
      .field('medicamentosLentesDeContato', record.medicamentosLentesDeContato)
      .field('medicamentosTonturas', record.medicamentosTonturas)
      .field('medicamentosProblemasRenais', record.medicamentosProblemasRenais)
      .field('medicamentosLupus', record.medicamentosLupus)
      .field('medicamentosQueloides', record.medicamentosQueloides)
      .field('medicamentosImplanteDentario', record.medicamentosImplanteDentario)
      .field('medicamentosFaltaDeAr', record.medicamentosFaltaDeAr)
      .field('medicamentosUsoDeCorticoides', record.medicamentosUsoDeCorticoides)
      .field('medicamentosPsoriase', record.medicamentosPsoriase)
      .field('medicamentosDermatiteSeborreica', record.medicamentosDermatiteSeborreica)
      .field('medicamentosPlacasMetalicasFace', record.medicamentosPlacasMetalicasFace)
      .field('frequenciaAtividadesFisicasId', record.frequenciaAtividadesFisicasId)
      .field('alimentacao', record.alimentacao)
      .field('aguaQuantidade', record.aguaQuantidade)
      .field('aguaCopos', record.aguaCopos)
      .field('etilismo', record.etilismo)
      .field('fumante', record.fumante)
      .field('funcaoIntestinalId', record.funcaoIntestinalId)
      .field('exposicaoSolarId', record.exposicaoSolarId)
      .field('fototipoId', record.fototipoId)
      .field('etniaId', record.etniaId)
      .field('tipoPeleId', record.tipoPeleId)
      .field('peleAoTatoId', record.peleAoTatoId)
      .field('peleSensibilidadeId', record.peleSensibilidadeId)
      .field('acromias', record.acromias)
      .field('hipocromias', record.hipocromias)
      .field('efelides', record.efelides)
      .field('melasmas', record.melasmas)
      .field('lentigos', record.lentigos)
      .field('melanose', record.melanose)
      .field('hipercromiaPosTraumatica', record.hipercromiaPosTraumatica)
      .field('hipercromiaPosInflamatoria', record.hipercromiaPosInflamatoria)
      .field('xantelasmas', record.xantelasmas)
      .field('hiperplasiaSebacea', record.hiperplasiaSebacea)
      .field('cicatrizes', record.cicatrizes)
      .field('seborreia', record.seborreia)
      .field('flacidezMuscular', record.flacidezMuscular)
      .field('comedoesCapilares', record.comedoesCapilares)
      .field('eritemas', record.eritemas)
      .field('verrugas', record.verrugas)
      .field('queratosePilarFolicular', record.queratosePilarFolicular)
      .field('asfitica', record.asfitica)
      .field('ostiosDilatados', record.ostiosDilatados)
      .field('flacidezTissular', record.flacidezTissular)
      .field('microcomedoes', record.microcomedoes)
      .field('edemas', record.edemas)
      .field('nevos', record.nevos)
      .field('dermografismo', record.dermografismo)
      .field('talangiectasias', record.talangiectasias)
      .field('miliuns', record.miliuns)
      .field('escoriacoes', record.escoriacoes)
      .field('comedoesAbertos', record.comedoesAbertos)
      .field('hematomas', record.hematomas)
      .field('fotoenvelhecimentoId', record.fotoenvelhecimentoId)
      .field('pustulas', record.pustulas)
      .field('nodulos', record.nodulos)
      .field('comedoesFechados', record.comedoesFechados)
      .field('papulas', record.papulas)
      .field('acneJuvenilVulgar', record.acneJuvenilVulgar)
      .field('acneTardia', record.acneTardia)
      .field('acneFamilia', record.acneFamilia)
      .field('ativo', record.ativo)
      .field('clienteId', client.id)
      .field('descricaoRosto', record.descricaoRosto)
      .attach('assinaturaCliente', './test/testFile.txt')
      .attach('imagemRosto', './test/testFile.txt')
      .auth(token, { type: 'bearer' })
      .expect(204)
  }).timeout(5000)

  test('Deverá alterar uma ficha', async () => {
    const record = await RecordFactory.with('cliente', 1, (client) => {
      client.with('usuario')
    }).create()

    const anotherRecord = await RecordFactory.make()

    const { token } = await getToken({ getUserId: false })

    await supertest(BASE_URL)
      .put(`/record/${record.id}`)
      .send(anotherRecord.$attributes)
      .auth(token, { type: 'bearer' })
      .expect(204)
  })

  test('Deverá alterar uma imagem de uma ficha', async () => {
    const record = await RecordFactory.with('cliente', 1, (client) => {
      client.with('usuario')
    }).create()

    const { token } = await getToken({ getUserId: false })

    await supertest(BASE_URL)
      .put(`/record/${record.id}`)
      .attach('assinaturaCliente', './test/testFile.txt')
      .auth(token, { type: 'bearer' })
      .expect(204)
  })

  test('Deverá retornar uma ficha', async () => {
    const record = await RecordFactory.with('cliente', 1, (client) => {
      client.with('usuario')
    }).create()

    const { token } = await getToken({ getUserId: false })

    await supertest(BASE_URL)
      .get(`/record/${record.id}`)
      .auth(token, { type: 'bearer' })
      .expect(200)
  })

  test('Deverá retornar todas as fichas do usuario', async (assert) => {
    const { token, userId } = await getToken({ getUserId: true })

    await RecordFactory.with('cliente', 1, (client) => {
      client.merge({ usuarioId: userId })
    }).createMany(5)

    const { text } = await supertest(BASE_URL)
      .get(`/record`)
      .auth(token, { type: 'bearer' })
      .expect(200)

    assert.equal(JSON.parse(text).length, 5)
  })
})
