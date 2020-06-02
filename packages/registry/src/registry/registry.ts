import { IRegistry } from "../types";
import { IFactory } from "@appgenerator/factory";

type IRegistryMap = {
  [key: string]: IRegistry;
};

type IFactoryMap = {
  [key: string]: IFactory;
};

export class Registry implements IRegistry {
  name: string;
  store: IFactoryMap = {};
  registry: IRegistry = this.createRegistry();

  constructor(name: string, registries: IRegistryMap = {}) {
    this.name = name;
    this.registerMap(registries);
    this.init();
  }

  build(): any[] {
    return this.factoryList.map((factory) => factory.build());
  }

  get factoryList() {
    return Object.values(this.store);
  }

  init() {
    this.registry = this.registry || this.createRegistry();
  }

  createRegistry(name: string = "unknown"): IRegistry {
    return new Registry(name);
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
    // this.registry.add(name, registry);
  }

  registerMap(registries: IRegistryMap) {
    Object.entries(registries).map(([name, registry]) => {
      // this.add(registry, name);
    });
  }
}
