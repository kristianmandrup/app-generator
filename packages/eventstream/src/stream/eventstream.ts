import { IEventSubscriber, IEvent, INotifyTarget } from "../event";

export class EventStream {
  subscribers: {
    [key: string]: INotifyTarget;
  } = {};
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  get subscriberList() {
    return Object.values(this.subscribers);
  }

  subscribe(subscriber: any, name: string = "default") {
    name = name || subscriber.name;
    this.subscribers[name] = subscriber;
  }

  protected subscriberName(subscriber: string | IEventSubscriber): string {
    return typeof subscriber === "string" ? subscriber : subscriber.name;
  }

  named(name: string) {
    return this.subscribers[name];
  }

  unsubscribe(subscriber: string | IEventSubscriber) {
    const name = this.subscriberName(subscriber);
    delete this.subscribers[name];
  }

  dispatch(event: IEvent) {
    this.subscriberList.map((subscriber) => subscriber.notify(event));
    return this;
  }
}
