import { Schema } from '../schema';
import { Registry } from '../../../registry/src/registry';
import { IRegistry } from '../../../registry/src/types';
import { MaterializedView } from '../../../materialized-views/src/materialized-view/index';
import { registries } from './registries';

export class Factory {
  registry: IRegistry

  constructor(public schema: Schema) {
    this.init()    
  }

  init() {
    this.registry = new Registry(registries)
  }

  build(schema?: Schema) {
    this.schema = schema || this.schema
    this.registry.build()
  }

  register(registry: Registry, name?: string) {
    name = name || registry.name
    this.registry.add(name, registry) 
  }
}
