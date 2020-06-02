import { Factory } from "./base";
import { IRegistry } from "packages/registry/src/types";
import { Registry } from "packages/registry/src/registry";

export class AppFactory extends Factory {
  registry?: IRegistry;

  init(registries: any) {
    this.registry = new Registry(registries);
  }
}
