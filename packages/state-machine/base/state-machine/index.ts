import { controllers } from '../../../views/src/index';


export class StateMachine {
  controllers = {}

  add(controller, name?: string) {
    name = name || controller.name
    this.controllers[name] = controller
  }

  get controllerList() {
    return Object.values(this.controllers)    
  }

  get controllerNames() {
    return Object.keys(this.controllers)    
  }

  controller(name: string) {
    return this.controllers[name]
  }
}