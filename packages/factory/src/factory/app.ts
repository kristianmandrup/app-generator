import { Factory } from './base';

export class AppFactory extends Factory {
  registry: IRegistry

  init() {
    this.registry = new Registry(registries)
  }
}
