import { IRegistry, IFactoryMap, IRegistryMap } from "../types";
import { IFactory } from "@appgenerator/factory";

export class Registry implements IRegistry {
  name: string;
  store: IFactoryMap = {};
  registries: IRegistryMap = {};

  constructor(name: string, registries: any = {}) {
    this.name = name;
    this.registerMap(registries);
    this.init();
  }

  build() {
    return {
      factories: this.buildFromFactories(),
      registries: this.buildFromNestedRegistries(),
    };
  }

  buildFromFactories(): any[] {
    return this.factoryList.map((factory) => factory.build());
  }

  buildFromNestedRegistries(): any[] {
    return this.registriesList.map((registry) => registry.build());
  }

  get factoryList() {
    return Object.values(this.store);
  }

  get registriesList() {
    return Object.values(this.registries);
  }

  init() {}

  createRegistry(name: string = "unknown"): IRegistry {
    return new Registry(name);
  }

  addFactory(factory: IFactory, name?: string) {
    this.init();
    name = name || factory.name;
    this.store[name] = factory;
  }

  addRegistry(registry: IRegistry, name?: string) {
    this.init();
    name = name || registry.name;
    this.registries[name] = registry;
  }

  addFactoryMap(factoryMap: any) {
    this.init();
    Object.entries(factoryMap).map(([name, entry]) => {
      if ((entry as any).name) {
        this.addFactory(entry as IFactory, name);
      } else {
        const registry = new Registry(name, entry);
        this.addRegistry(registry);
      }
    });
  }

  factoryNamed(name: string): IFactory {
    return this.store[name];
  }

  registryNamed(name: string): IFactory {
    return this.store[name];
  }

  registerMap(factoryMap: any) {
    Object.values(factoryMap).map((registry) => {
      this.addFactoryMap(registry);
    });
  }
}
