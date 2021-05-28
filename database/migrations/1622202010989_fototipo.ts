import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fototipo extends BaseSchema {
  protected tableName = 'fototipo'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao', 255).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
