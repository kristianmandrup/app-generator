import { Schema } from "../schema";
import { Registry } from "../../../registry/src/registry";
import { IRegistry } from "../../../registry/src/types";
import { registries } from "./registries";
import { IConnector } from "./connector/base";

export class Factory {
  name: string = "no name";
  registry: IRegistry;
  builder: IBuilder;
  connector: IConnector;

  constructor(public schema: Schema) {
    this.init();
  }

  init(name?: string = this.name) {
    this.registry = new Registry(name, registries);
  }

  injectBuilder(builder: IBuilder) {
    this.builder = builder;
  }

  injectConnector(connector: IConnector) {
    this.connector = connector;
  }

  register(registry: Registry, name?: string) {
    name = name || registry.name;
    this.registry.add(name, registry);
  }
}
