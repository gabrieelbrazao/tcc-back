import { ClientFactory } from 'Database/factories/Cliente'
import { UserFactory } from 'Database/factories/Usuario'
import test from 'japa'
import supertest from 'supertest'

test.group('Cliente', () => {
  const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

  const getToken = async (
    email: string | undefined = undefined,
    password: string | undefined = undefined
  ) => {
    if (!email && !password) {
      const user = await UserFactory.make()
      email = user.email
      password = user.senha

      await user.save()
    }

    const { text } = await supertest(BASE_URL).get('/user/login').query({
      email: email,
      senha: password,
    })

    return JSON.parse(text).token
  }

  test('Deverá adicionar um cliente no banco de dados', async () => {
    const client = await ClientFactory.apply('optionals').make()

    const token = await getToken()

    await supertest(BASE_URL)
      .post('/client')
      .send({
        nome: client.nome,
        endereco: client.endereco,
        bairro: client.bairro,
        cidade: client.cidade,
        estado: client.estado,
        profissao: client.profissao,
        estadoCivil: client.estadoCivil,
        dataNascimento: client.dataNascimento,
        ativo: client.ativo,
        foneResidencial: client.foneResidencial,
        foneComercial: client.foneComercial,
        celular: client.celular,
        email: client.email,
        cep: client.cep,
      })
      .auth(token, { type: 'bearer' })
      .expect(204)
  })

  test('Deverá adicionar um cliente sem campos opcionais no banco de dados', async () => {
    const client = await ClientFactory.make()

    const token = await getToken()

    await supertest(BASE_URL)
      .post('/client')
      .send({
        nome: client.nome,
        endereco: client.endereco,
        bairro: client.bairro,
        cidade: client.cidade,
        estado: client.estado,
        profissao: client.profissao,
        estadoCivil: client.estadoCivil,
        dataNascimento: client.dataNascimento,
        ativo: client.ativo,
      })
      .auth(token, { type: 'bearer' })
      .expect(204)
  })

  test('Deverá alterar um cliente', async () => {
    const client = await ClientFactory.with('usuario').create()
    const anotherClient = await ClientFactory.make()

    const token = await getToken()

    await supertest(BASE_URL)
      .put(`/client/${client.id}`)
      .send(anotherClient.$attributes)
      .auth(token, { type: 'bearer' })
      .expect(204)
  })

  test('Deverá retornar um cliente', async () => {
    const client = await ClientFactory.with('usuario').create()

    const token = await getToken()

    await supertest(BASE_URL)
      .get(`/client/${client.id}`)
      .auth(token, { type: 'bearer' })
      .expect(200)
  })

  test('Deverá retornar todos os clientes do usuário', async () => {
    const user = await UserFactory.with('clientes', 5).make()

    const password = user.senha

    await user.save()

    const token = await getToken(user.email, password)

    await supertest(BASE_URL).get('/client').auth(token, { type: 'bearer' }).expect(200)
  })
})
