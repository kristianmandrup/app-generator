import { IEvent, IEventSubscriber } from "@appgenerator/eventstream";
import { IStore } from "@appgenerator/stores";

export class MVController {
  store?: IStore;
  subscribers = {};
  listeners = {};

  constructor(public name: string) {}

  subscribeWith(subscriber: IEventSubscriber, name?: string) {
    subscriber.onEvent = this.onEvent;
    name = name || subscriber.name;
    this.subscribers[name] = subscriber;
  }

  onEvent(event: IEvent) {
    this.updateStore(event);
    this.notifyAll();
  }

  get subscriberList() {
    return Object.values(this.subscriberList);
  }

  notifyAll() {
    this.subscriberList.map((subscriber) => subscriber.notify(this.data));
  }

  updateStore(event: IEvent) {
    if (!this.store) return;
    this.store.update(event);
  }

  get data(): any {
    return this.store;
  }
}
