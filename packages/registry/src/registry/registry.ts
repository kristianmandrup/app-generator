import { IRegistry } from "../types";

export class Registry implements IRegistry {
  name: string
  store = {};
  registry: IRegistry = this.createRegistry();

  constructor(name?: string, registries: any = {}) {
    this.name = name;
    this.init()
  }

  build(): any[] {
    return this.factoryList.map((factory) => factory.build());
  }

  get factoryList() {
    return Object.values(this.store);
  }

  init() {
    this.registry = this.registry || this.createRegistry()
  }

  createRegistry(): IRegistry {
    return new Registry();
  }

  add(factory: IFactory, name?: string) {
    this.init();
    name = name || factory.name;
    this.store[name] = factory;
  }

  named(name: string): IFactory {
    return this.store[name];
  }

  register(registry: Registry, name?: string) {
    name = name || registry.name;
    this.registry.add(name, registry);
  }

  registerMap(registries: any) {
    Object.entries(registries).map(([name, registry]) => {
      this.add(registry, name);  
    }
  }
}
