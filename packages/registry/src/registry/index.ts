import { IRegistry } from '../types';

export class Registry implements IRegistry {
  store = {}
  registry: Registry

  constructor(name?: string) {
    this.name = name
  }

  build(): any[] {
    return this.factoryList.map(factory => factory.build())
  }

  get factoryList() {
    return Object.values(this.store)
  }

  init() {
    this.registry = this.registry || new Registry()
  }

  add(factory: IFactory, name?: string) {
    this.init()
    name = name || factory.name
    this.store[name] = factory
  } 

  named(name: string): IFactory {
    return this.store[name];
  } 

  register(registry: Registry, name?: string) {
    name = name || registry.name
    this.registry.add(name, registry) 
  }
}