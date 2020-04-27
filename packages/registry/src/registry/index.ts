export class Registry {
  store = {}
  registry: Registry

  constructor(name?: string) {
    this.name = name
  }

  init() {
    this.registry = this.registry || new Registry()
  }

  add(string name, factory: any) {
    this.init()
    this.store[name] = factory
  } 

  get(string name) {
    return this.store[name];
  } 

  register(registry: Registry, name?: string) {
    name = name || registry.name
    this.registry.add(name, registry) 
  }
}