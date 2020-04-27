import { ISubscriber } from './subscriber';
import { Subject } from 'rxjs';

export class EventStream {
  subscribers = {}
  subject: Subject

  constructor(name?: string) {
    this.name = name
    this.init()
  }

  init() {
    const subject = new Subject()
    subject.subscribe({
      next(value) {
        this.subscribers.map(subscriber => subscriber.onEvent(value))
      },
      error(error) {
        this.onError(error)
      },
      complete() {
        this.onComplete()
      }
    })
    this.subject = subject
  }

  onComplete() {

  }

  onError(error) {
    const { name } = error
    const subscribers = this.named(name)
    subscribers.map(subscriber => subscriber.onError(error))
  }

  publish(event) {
    this.subject.next(event)
  }

  // TODO: generalize
  subscribe(subscriber: any, name?: string) {
    this.init()
    name = name || subscriber.name
    this.subscribers[name] = subscriber
  } 

  subscriberName(subscriber: string | ISubscriber): string {
    return typeof name === 'string' ? subscriber : subscriber.name
  }

  named(name: string) {
    return this.subscribers[name] || [];
  } 

  unsubscribe(subscriber: string | ISubscriber) {
    const name = this.subscriberName(subscriber)
    delete this.subscribers[name];
  } 
}