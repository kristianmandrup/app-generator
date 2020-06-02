import { Factory } from "./base";
import { Registry, IRegistry } from "@appgenerator/registry";

export class AppFactory extends Factory {
  registry?: IRegistry;

  init(registries: any) {
    this.registry = new Registry(registries);
  }
}
