import { ISchema } from "../types";
import { IRegistry, Registry, IRegistryMap } from "@appgenerator/registry";

type IBuildMap = {
  path: string;
  registry: IRegistry;
  instance: any;
  entity: any;
};

type BuilderArgs = {
  schema?: ISchema;
  factories?: IRegistry;
};

export class Builder {
  name: string;
  schema: any = {};
  factories?: IRegistry;
  built?: IRegistry;

  constructor(name: string, { schema, factories }: BuilderArgs = {}) {
    this.name = name;
    this.setSchema(schema);
    this.setFactories(factories);
  }

  setSchema(schema) {
    this.schema = schema;
    return this;
  }

  setFactories(factories) {
    this.factories = factories;
    return this;
  }

  init() {
    this.built = this.built || new Registry("built");
  }

  build(schema?: ISchema) {
    this.schema = schema || this.schema;
    this.init();
    this.buildAll();
  }

  buildAll(): any {
    return {
      ...this.rootBuild(),
    };
  }

  registryMapBuild(registryMap: IRegistryMap) {
    return Object.keys(registryMap).reduce((acc, name) => {
      const registry = registryMap[name];
      acc[name] = this.registryBuild(registry);
      return acc;
    }, {});
  }

  rootBuild() {
    const { factories } = this;
    if (!factories) return {};
    return this.registryBuild(factories);
  }

  registryBuild(registry: IRegistry) {
    const { entryMap, name } = registry;
    return {
      [name]: this.entryMapBuild(entryMap),
      ...this.registryMapBuild(registry.registryMap),
    };
  }

  entryMapBuild(entryMap: any = {}) {
    return Object.keys(entryMap).reduce((acc, name) => {
      acc[name] = this.buildNamed(name);
      return acc;
    }, {});
  }

  buildNamed = (path: string, name: string = "default"): IBuildMap[] => {
    const { factories, schema, built } = this;
    if (!factories) return [];
    if (!built) return [];
    const factoryMap = factories.mapAtPath(path);
    const factory = factoryMap[name];

    // such as services
    const entities = schema.entities();
    return entities.map((entity) => {
      const instance = this.buildInstance(factory, entity);
      const registry = built.atPath(path);
      return { path, registry, instance, entity };
    });
  };

  registerBuilt({ registry, instance, entity }: IBuildMap) {
    if (registry) {
      registry.addEntry({ instance, entity });
    }
  }

  buildInstance(factory, entity) {
    const $factory = factory.create ? factory.create : factory;
    if (typeof factory !== "function") {
      console.error({ factory });
      throw new Error("Invalid factory - must be a function");
    }
    return $factory(entity);
  }
}
