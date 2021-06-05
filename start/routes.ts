import Route from '@ioc:Adonis/Core/Route'

Route.get('/user', 'UsuarioController.show')

Route.post('/user', 'UsuarioController.create')

Route.put('/user/:id', 'UsuarioController.update')

Route.patch('/user/changePassword/:id', 'UsuarioController.changePassword')
