import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Ficha from './Ficha'

export default class Etnia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @hasMany(() => Ficha)
  public fichas: HasMany<typeof Ficha>
}
