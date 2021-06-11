import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'UsuarioController.login')

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

Route.group(() => {
  Route.get('/record/:id', 'ConsultaController.index')

  Route.post('/record/:id', 'ConsultaController.create')
}).prefix('/consultation')

Route.group(() => {
  Route.get('/user/:id', 'FichaController.index')

  Route.get('/:id', 'FichaController.show')

  Route.post('/', 'FichaController.create')

  Route.put('/:id', 'FichaController.update')
}).prefix('/record')
