import { IRegistry } from '../../../registry/src/types';

export class Builder {
  registry: IRegistry
  built: IRegistry

  constructor({schema, registry} = {schema: Schema, registry: IRegistry}) {
    this.registry = registry
  }

  init() {
    this.built = this.built || new Registry(registries)    
  }

  build(schema?: Schema) {
    this.schema = schema || this.schema
    this.init()
    this.buildAll()
  }

  buildAll(): any {
    const { registry, schema } = this
    const names = Object.keys(registry)
    return names.map(this.buildNamed)
  }

  buildNamed = (name: string) => {
    const { registry, schema } = this
    const entry = registry[name]

    // such as services
    const entities = schema.entities()
    return entities.map(entity => {
      const instance = entry.create(entity)
      built.register({ instance, entity })
    })
    return built
  }
}