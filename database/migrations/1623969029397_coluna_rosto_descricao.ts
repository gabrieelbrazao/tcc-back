import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ColunaRostoDescricao extends BaseSchema {
  protected tableName = 'coluna_rosto_descricao'

  public async up() {
    this.schema.alterTable('ficha', (ficha) => {
      ficha.string('descricao_rosto', 255).notNullable()
    })
  }

  public async down() {
    this.schema.alterTable('ficha', (ficha) => {
      ficha.dropColumn('descricao_rosto')
    })
  }
}
