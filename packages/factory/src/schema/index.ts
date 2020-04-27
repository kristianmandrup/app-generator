enum PropType {
  StringType,
  NumberType,
  BooleanType,
  ObjectType,
  ObjectArrayType
}

export class SchemaProperty {
  get type(): PropType  {
    return PropType.StringType
  }

  get value(): any {
    return {}
  }
}

export class SchemaEntity {
  get properties(query?: any): SchemaProperty[] {
    return []
  }
}

export class Schema {
  get entities(query?: any): SchemaEntity[] {
    return []
  }
}