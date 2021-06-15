import { ConsultationFactory } from 'Database/factories/Consulta'
import test from 'japa'

test.group('Consulta', () => {
  test('Deverá adicionar uma consulta no banco de dados', async (assert) => {
    const consultation = await ConsultationFactory.with('ficha', 1, (record) =>
      record.with('cliente', 1, (client) => client.with('usuario'))
    ).create()

    assert.isTrue(consultation.$isPersisted)
  })

  test('Deverá adicionar uma consulta sem campos opcionais no banco de dados', async (assert) => {
    const consultation = await ConsultationFactory.apply('optionals')
      .with('ficha', 1, (record) => record.with('cliente', 1, (client) => client.with('usuario')))
      .create()

    assert.isTrue(consultation.$isPersisted)
  })

  test('Deverá retornar todas as consultas da ficha', async (assert) => {
    const consultations = await ConsultationFactory.with('ficha', 1, (record) =>
      record.with('cliente', 1, (client) => client.with('usuario'))
    ).createMany(5)

    let allConsultationsArePersisted = true

    consultations.map((consultation) => {
      if (!consultation.$isPersisted) allConsultationsArePersisted = false
    })

    assert.plan(2)

    assert.isTrue(allConsultationsArePersisted)
    assert.equal(consultations.length, 5)
  })
})
