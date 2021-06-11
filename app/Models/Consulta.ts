import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Ficha from './Ficha'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public data: DateTime

  @column()
  public tratamentos: string | null

  @column()
  public observacoes: string | null

  @column()
  public orientacoes: string | null

  @column()
  public esteticista: string

  @column()
  public assinaturaCliente: string

  @column()
  public fichaId: number

  @belongsTo(() => Ficha)
  public ficha: BelongsTo<typeof Ficha>
}
