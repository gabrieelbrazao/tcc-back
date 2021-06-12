import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cliente extends BaseSchema {
  protected tableName = 'cliente'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 255).notNullable()
      table.string('fone_residencial', 10)
      table.string('fone_comercial', 11)
      table.string('celular', 11)
      table.string('email', 255)
      table.string('endereco', 255).notNullable()
      table.string('bairro', 255).notNullable()
      table.string('cidade', 255).notNullable()
      table.string('estado', 2).notNullable()
      table.string('cep', 8)
      table.string('profissao', 255).notNullable()
      table.string('estado_civil', 45).notNullable()
      table.date('data_nascimento').notNullable()
      table.string('ativo', 1).notNullable()
      table
        .integer('usuario_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('usuario')
        .notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
