import { Schema } from '../schema';
import { Registry } from '../../../registry/src/registry';
import { IRegistry } from '../../../registry/src/types';
import { MaterializedView } from '../../../materialized-views/src/materialized-view/index';
import { registries } from './registries';

export class Factory {
  registry: IRegistry
  builder: IBuilder
  connector: IConnector

  constructor(public schema: Schema) {
    this.init()    
  }

  init() {
    this.registry = new Registry(registries)    
  }

  injectBuilder(builder: IBuilder) {
    this.builder = builder
  }

  injectConnector(connector: IConnector) {
    this.connector = connector
  }

  register(registry: Registry, name?: string) {
    name = name || registry.name
    this.registry.add(name, registry) 
  }
}
