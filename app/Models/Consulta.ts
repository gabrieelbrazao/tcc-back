import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data: Date

  @column()
  public tratamentos: string | null

  @column()
  public observacoes: string | null

  @column()
  public orientacoes: string | null

  @column()
  public esteticista: string

  @column()
  public assinaturaCliente: string | null
}
