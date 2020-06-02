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

  buildNamed = (name: string) => {
    const { factories, schema, built } = this;
    if (!factories) return;
    if (!built) return;
    const factory = factories[name];

    // such as services
    const entities = schema.entities();
    return entities.map((entity) => {
      const instance = factory.create(entity);
      // built.register({ instance, entity });
    });
    return built;
  };
}
