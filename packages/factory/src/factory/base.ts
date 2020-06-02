import { Schema } from "../schema";
import { IRegistry, Registry } from "@appgenerator/registry";
import { registries } from "./registries";
import { IConnector } from "./connector/base";
import { IBuilder } from "../types";

export class Factory {
  name: string = "no name";
  registry?: IRegistry;
  builder?: IBuilder;
  connector?: IConnector;

  constructor(public schema: Schema) {
    this.init();
  }

  init(name: string = this.name) {
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
    if (!this.registry) return;
    // this.registry.add(name, registry);
  }
}
