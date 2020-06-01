import { IEventSubscriber } from "../event";
export class EventStream {
  subscribers = {};
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  subscribe(subscriber: any, name?: string) {
    name = name || subscriber.name;
    if (!name) {
      throw "Name required";
    }
    this.subscribers[name] = subscriber;
  }

  subscriberName(subscriber: string | IEventSubscriber): string {
    return typeof subscriber === "string" ? subscriber : subscriber.name;
  }

  named(name: string) {
    return this.subscribers[name];
  }

  unsubscribe(subscriber: string | IEventSubscriber) {
    const name = this.subscriberName(subscriber);
    delete this.subscribers[name];
  }

  onEvent(_event) {}
}
