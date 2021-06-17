import { UserFactory } from 'Database/factories/Usuario'
import Hash from '@ioc:Adonis/Core/Hash'
import test from 'japa'
import supertest from 'supertest'
import Usuario from 'App/Models/Usuario'

test.group('Usuário', () => {
  const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

  const getToken = async (email: string, password: string) => {
    const { text } = await supertest(BASE_URL).get('/user/login').query({
      email,
      senha: password,
    })

    return JSON.parse(text).token
  }

  test('Deverá adicionar um usuário no banco de dados', async () => {
    const user = await UserFactory.make()

    await supertest(BASE_URL)
      .post('/user')
      .send({
        nome: user.nome,
        email: user.email,
        senha: user.senha,
      })
      .expect(204)
  })

  test('Deverá rejeitar a criação de usuário pelo conflito de e-mail', async () => {
    const user = await UserFactory.make()

    await supertest(BASE_URL).post('/user').send({
      nome: user.nome,
      email: user.email,
      senha: user.senha,
    })

    await supertest(BASE_URL)
      .post('/user')
      .send({
        nome: user.nome,
        email: user.email,
        senha: user.senha,
      })
      .expect(409)
  })

  test('Deverá retornar um token de acesso', async () => {
    const user = await UserFactory.make()
    const password = user.senha

    await user.save()

    await supertest(BASE_URL)
      .get('/user/login')
      .query({
        email: user.email,
        senha: password,
      })
      .expect(200)
  })

  test('Deverá garantir que seja criado um hash para a senha do usuário ao salvá-lo no banco de dados', async (assert) => {
    const user = await UserFactory.make()
    const password = user.senha

    await user.save()

    assert.isTrue(await Hash.verify(user.senha, password))
  })

  test('Deverá alterar a senha, nome e e-mail do usuário', async (assert) => {
    let user = await UserFactory.make()
    const password = user.senha

    await user.save()

    const token = await getToken(user.email, password)

    const newUser = await UserFactory.make()

    await supertest(BASE_URL)
      .put('/user')
      .send({
        nome: newUser.nome,
        email: newUser.email,
        senha: newUser.senha,
      })
      .auth(token, { type: 'bearer' })

    user = await Usuario.findOrFail(user.id)

    assert.plan(3)

    assert.equal(user.nome, newUser.nome)
    assert.equal(user.email, newUser.email)
    assert.isTrue(await Hash.verify(user.senha, newUser.senha))
  })

  test('Deverá alterar a senha do usuário', async (assert) => {
    const oldUser = await UserFactory.make()
    const password = oldUser.senha

    await oldUser.save()

    const token = await getToken(oldUser.email, password)

    const newUser = await UserFactory.make()

    await supertest(BASE_URL)
      .put('/user')
      .send({
        senha: newUser.senha,
      })
      .auth(token, { type: 'bearer' })

    const updatedUser = await Usuario.findOrFail(oldUser.id)

    assert.plan(3)
    assert.equal(oldUser.nome, updatedUser.nome)
    assert.equal(oldUser.email, updatedUser.email)
    assert.isTrue(await Hash.verify(updatedUser.senha, newUser.senha))
  })

  test('Deverá mandar um e-mail com a nova senha do usuário', async () => {
    const user = await UserFactory.merge({
      email: process.env.SES_SENDER_EMAIL,
    }).create()

    await supertest(BASE_URL).patch('/user/changePassword').send({ email: user.email }).expect(204)
  })

  test('Deverá retornar os dados do usuário', async () => {
    const user = await UserFactory.make()
    const password = user.senha

    await user.save()

    const token = await getToken(user.email, password)

    await supertest(BASE_URL).get('/user').auth(token, { type: 'bearer' }).expect(200)
  })

  test('Deverá rejeitar o login de usuário por senha incorreta', async () => {
    const user = await UserFactory.merge({
      senha: 'password',
    }).create()

    await supertest(BASE_URL)
      .get('/user/login')
      .query({
        email: user.email,
        senha: 'anotherPassword',
      })
      .expect(401)
  })

  test('Deverá rejeitar o login de usuário por e-mail incorreto', async () => {
    const user = await UserFactory.merge({
      email: 'email@test.com',
    }).make()

    const password = user.senha

    user.save()

    await supertest(BASE_URL)
      .get('/user/login')
      .query({
        email: 'anotherEmail@test.com',
        senha: password,
      })
      .expect(404)
  })
})
