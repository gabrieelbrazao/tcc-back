import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Ficha from './Ficha'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public foneResidencial: string | null

  @column()
  public foneComercial: string | null

  @column()
  public celular: string | null

  @column()
  public email: string | null

  @column()
  public endereco: string

  @column()
  public bairro: string

  @column()
  public cidade: string

  @column()
  public estado: string

  @column()
  public cep: string | null

  @column()
  public profissao: string

  @column()
  public estadoCivil: string

  @column()
  public dataNascimento: Date

  @column()
  public descricao: string

  @hasMany(() => Ficha)
  public fichas: HasMany<typeof Ficha>
}
