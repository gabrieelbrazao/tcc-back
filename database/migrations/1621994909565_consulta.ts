import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Consultas extends BaseSchema {
  protected tableName = 'consulta'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('data').notNullable()
      table.string('tratamentos', 255)
      table.string('observacoes', 255)
      table.string('orientacoes', 255)
      table.string('esteticista', 45).notNullable()
      table.string('assinatura_cliente', 255)
      table.integer('ficha_id').references('id').inTable('ficha')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
