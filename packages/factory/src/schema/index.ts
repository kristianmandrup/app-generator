enum PropType {
  StringType,
  NumberType,
  BooleanType,
  ObjectType,
  ObjectArrayType,
}

export class SchemaProperty {
  get type(): PropType {
    return PropType.StringType;
  }

  get value(): any {
    return {};
  }
}

export class SchemaEntity {
  properties(query?: any): SchemaProperty[] {
    return [];
  }
}

export class Schema {
  schema: any;
  constructor(schema: any) {
    this.schema = schema;
  }

  entities(query?: any): SchemaEntity[] {
    return [];
  }
}
