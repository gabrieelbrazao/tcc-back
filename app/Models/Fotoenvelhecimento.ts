import { BaseModel, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { HasMany } from '@ioc:Adonis/Lucid/Relations'
import Ficha from './Ficha'

export default class Fotoenvelhecimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public descricao: string

  @hasMany(() => Ficha)
  public fichas: HasMany<typeof Ficha>
}
