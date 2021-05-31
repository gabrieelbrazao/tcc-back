import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Ficha from './Ficha'

export default class PeleAoTato extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @hasMany(() => Ficha)
  public Ficha: HasMany<typeof Ficha>
}
