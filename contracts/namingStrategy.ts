import { BaseModel, NamingStrategyContract } from '@ioc:Adonis/Lucid/Orm'
import { string } from '@ioc:Adonis/Core/Helpers'

export default class NotPluralStrategy implements NamingStrategyContract {
  public tableName(model: typeof BaseModel) {
    return string.snakeCase(model.name)
  }

  public columnName(_model: typeof BaseModel, propertyName: string) {
    return string.snakeCase(propertyName)
  }

  public serializedName(_model: typeof BaseModel, propertyName: string) {
    return string.snakeCase(propertyName)
  }

  public relationLocalKey(
    relation: string,
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ) {
    if (relation === 'belongsTo') {
      return relatedModel.primaryKey
    }

    return model.primaryKey
  }

  public relationForeignKey(
    relation: string,
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ) {
    if (relation === 'belongsTo') {
      return string.camelCase(`${relatedModel.name}_${relatedModel.primaryKey}`)
    }

    return string.camelCase(`${model.name}_${model.primaryKey}`)
  }

  public relationPivotTable(
    _relation: 'manyToMany',
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ) {
    return string.snakeCase([relatedModel.name, model.name].sort().join('_'))
  }

  public relationPivotForeignKey(_relation: 'manyToMany', model: typeof BaseModel) {
    return string.snakeCase(`${model.name}_${model.primaryKey}`)
  }

  public paginationMetaKeys() {
    return {
      total: 'total',
      perPage: 'per_page',
      currentPage: 'current_page',
      lastPage: 'last_page',
      firstPage: 'first_page',
      firstPageUrl: 'first_page_url',
      lastPageUrl: 'last_page_url',
      nextPageUrl: 'next_page_url',
      previousPageUrl: 'previous_page_url',
    }
  }
}

BaseModel.namingStrategy = new NotPluralStrategy()
