import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/login', 'UsuarioController.login')

  Route.post('/', 'UsuarioController.create')

  Route.patch('/changePassword/:id', 'UsuarioController.changePassword')
}).prefix('/user')

Route.group(() => {
  Route.get('/', 'UsuarioController.show')

  Route.put('/', 'UsuarioController.update')
})
  .prefix('/user')
  .middleware('auth')

Route.group(() => {
  Route.get('/:id', 'ClienteController.showById')

  Route.get('/', 'ClienteController.showByUser')

  Route.post('/', 'ClienteController.create')

  Route.put('/:id', 'ClienteController.update')
})
  .prefix('/client')
  .middleware('auth')

Route.group(() => {
  Route.get('/record/:id', 'ConsultaController.index')

  Route.post('/record/:id', 'ConsultaController.create')
})
  .prefix('/consultation')
  .middleware('auth')

Route.group(() => {
  Route.get('/', 'FichaController.index')

  Route.get('/:id', 'FichaController.show')

  Route.post('/', 'FichaController.create')

  Route.put('/:id', 'FichaController.update')
})
  .prefix('/record')
  .middleware('auth')

Route.group(() => {
  Route.get('/', 'AuxController.index')
})
  .prefix('/aux')
  .middleware('auth')
