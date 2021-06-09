import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'UsuarioController.show')

  Route.post('/', 'UsuarioController.create')

  Route.put('/:id', 'UsuarioController.update')

  Route.patch('/changePassword/:id', 'UsuarioController.changePassword')
}).prefix('/user')

Route.group(() => {
  Route.get('/:id', 'ClienteController.showById')

  Route.get('/user/:id', 'ClienteController.showByUser')

  Route.post('/user/:id', 'ClienteController.create')

  Route.put('/:id', 'ClienteController.update')
}).prefix('/client')
