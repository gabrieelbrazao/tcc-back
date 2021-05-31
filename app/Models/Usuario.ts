import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public senha: string

  @column()
  public email: string

  @column()
  public nome: string

  @hasMany(() => Cliente)
  public clientes: HasMany<typeof Cliente>
}
