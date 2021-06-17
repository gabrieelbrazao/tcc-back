import { ConsultationFactory } from 'Database/factories/Consulta'
import { RecordFactory } from 'Database/factories/Ficha'
import { UserFactory } from 'Database/factories/Usuario'
import test from 'japa'
import supertest from 'supertest'

test.group('Consulta', () => {
  const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

  const getToken = async () => {
    const user = await UserFactory.make()
    const password = user.senha

    await user.save()

    const { text } = await supertest(BASE_URL).get('/user/login').query({
      email: user.email,
      senha: password,
    })

    return JSON.parse(text).token
  }

  test('Deverá adicionar uma consulta no banco de dados', async () => {
    const record = await RecordFactory.with('cliente', 1, (client) =>
      client.with('usuario')
    ).create()

    const { esteticista, tratamentos, observacoes, orientacoes } = await ConsultationFactory.apply(
      'optionals'
    ).make()

    const token = await getToken()

    if (!tratamentos || !observacoes || !orientacoes) return

    await supertest(BASE_URL)
      .post(`/consultation/record/${record.id}`)
      .field('esteticista', esteticista)
      .field('tratamentos', tratamentos)
      .field('observacoes', observacoes)
      .field('orientacoes', orientacoes)
      .attach('assinaturaCliente', './test/testFile.txt')
      .auth(token, { type: 'bearer' })
      .expect(204)
  })

  test('Deverá adicionar uma consulta sem campos opcionais no banco de dados', async () => {
    const record = await RecordFactory.with('cliente', 1, (client) =>
      client.with('usuario')
    ).create()

    const consultation = await ConsultationFactory.make()

    const token = await getToken()

    await supertest(BASE_URL)
      .post(`/consultation/record/${record.id}`)
      .field('esteticista', consultation.esteticista)
      .attach('assinaturaCliente', './test/testFile.txt')
      .auth(token, { type: 'bearer' })
      .expect(204)
  })

  test('Deverá retornar todas as consultas da ficha', async (assert) => {
    const record = await RecordFactory.with('cliente', 1, (client) => client.with('usuario'))
      .with('consultas', 5)
      .create()

    const token = await getToken()

    const { text } = await supertest(BASE_URL)
      .get(`/consultation/record/${record.id}`)
      .auth(token, { type: 'bearer' })
      .expect(200)

    assert.equal(JSON.parse(text).length, 5)
  })
})
