import { Factory } from './base';

export class ControllerFactory extends Factory {
  name: string

  build() {
    const { name } = this
    this.register()
  }
}
