import { Schema } from '../schema';
import { Registry } from '../../../registry/src/registry';

const registries = {
  entity: {
    models: {

    },
    views: {

    },
    controllers: {
      
    }
  }
}

export class Factory {
  registry: Registry = new Registry()

  constructor(public schema: Schema) {
    this.init()    
  }

  init() {}

  build(schema?: Schema) {
    this.schema = schema || this.schema
  }

  register(registry: Registry, name?: string) {
    name = name || registry.name
    this.registry.add(name, registry) 
  }
}
