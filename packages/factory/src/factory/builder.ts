import { ISchema } from "../types";
import { IRegistry, Registry } from "@appgenerator/registry";

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
    // const { factories, schema } = this;
    // const names = factories.keys;
    // return names.map(this.buildNamed);
  }

  buildNamed = (path: string, name: string = "default") => {
    const { factories, schema, built } = this;
    if (!factories) return;
    if (!built) return;
    const factoryMap = factories.mapAtPath(path);
    const factory = factoryMap[name];

    // such as services
    const entities = schema.entities();
    entities.map((entity) => {
      const instance = factory.create(entity);
      const registry = built.atPath(path);
      if (registry) {
        registry.addEntry({ instance, entity });
      }
    });
    return built;
  };
}
