export class Registry {
  store = {}
  registry: Registry

  constructor(name?: string) {
    this.name = name
  }

  init() {
    this.registry = this.registry || new Registry()
  }

  add(factory: any, name?: string) {
    this.init()
    name = name || factory.name
    this.store[name] = factory
  } 

  named(name: string) {
    return this.store[name];
  } 

  register(registry: Registry, name?: string) {
    name = name || registry.name
    this.registry.add(name, registry) 
  }
}