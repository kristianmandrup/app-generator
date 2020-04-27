import { ISubscriber } from './subscriber';

export class EventStream {
  subscribers = {}

  constructor(name?: string) {
    this.name = name
  }

  subscribe(subscriber: any, name?: string) {
    this.init()
    name = name || subscriber.name
    this.subscribers[name] = subscriber
  } 

  subscriberName(subscriber: string | ISubscriber): string {
    return typeof name === 'string' ? subscriber : subscriber.name
  }

  named(name: string) {
    return this.subscribers[name];
  } 

  unsubscribe(subscriber: string | ISubscriber) {
    const name = this.subscriberName(subscriber)
    delete this.subscribers[name];
  } 
}