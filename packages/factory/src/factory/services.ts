import { Factory } from './base';
import { materializedView } from '../../../materialized-views/src/index';

export class ServicesFactory extends Factory {
  name: string

  build() {
    const { name, registry } = this
    const { entity, infra } = registry
    const { services  } = entity
    const { controller, model, store } = services

    const { subscriber } = infra
    const event = `${name}:entity`

    const { list } = views

    subscriber.init = (instance) => {
      instance.subscribe(event)
    } 

    controller.init = (instance) => {
      instance.subscribeWith(subscriber.usedFor(instance))      
    }   

    model.init = (instance) => {
      instance.injectController(controller.usedFor(instance))
      instance.injectStore(store.usedFor(instance))      
    } 
  }
}
