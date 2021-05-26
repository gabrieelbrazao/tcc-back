import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuario'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('senha', 60).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
