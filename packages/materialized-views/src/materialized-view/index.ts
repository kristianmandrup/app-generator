import { IEvent } from '../../../eventstream/src/event/types';

interface IEventListener {
  notify(event: IEvent)
}

export class MaterializedView {
  store = {}
  subscribers = {}
  listeners = {}

  constructor(public name: string) {    
  }

  subscribeWith(subscriber: IEventSubscriber, name?: string) {    
    subscriber.onEvent = this.onEvent
    name = name || subscriber.name
    this.subscribers[name] = subscriber
  }

  addListener(listener: IEventListener, name?: string) {
    name = name || listener.name
    this.listeners[name] = listener
  }

  onEvent(event) {
    this.updateStore(event)
    this.notifyAll()
  }

  notifyAll() {
    this.listeners.map(listener => listener.notify(this.data))
  }

  updateStore(event) {    
  }

  get data(): any {
    return this.store
  }
}