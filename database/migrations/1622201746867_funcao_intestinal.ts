import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FuncaoIntestinal extends BaseSchema {
  protected tableName = 'funcao_intestinal'

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
