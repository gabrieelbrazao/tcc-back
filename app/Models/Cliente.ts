import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'

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
  public ativo: string

  @column()
  public usuarioId: string

  @belongsTo(() => Usuario)
  public usuario: BelongsTo<typeof Usuario>
}
