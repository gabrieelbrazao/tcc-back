import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AcneGrau extends BaseSchema {
  protected tableName = 'acne_grau'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('descricao', 45).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
