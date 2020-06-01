import { IPublisher } from "./publisher";
import { INotifier } from "./notifier";
import { ISubscriber } from "./subscriber";

export interface IConnectableInjectParams {
  notifier?: INotifier;
  publisher?: IPublisher;
}

export interface IConnectable extends IPublisher {
  name: string;
  publisher?: IPublisher;

  notify(data: any);
  notifyError(error: any);
  injectPublisher(publisher?: IPublisher);
  publish(data: any);
  clear();
}

// used by View, Controller etc to connect to a Connector to be:
// - notified by incoming data/events
// - to publish outgoing data/events
export class Connectable implements IConnectable {
  name: string;
  publisher?: IPublisher;

  constructor(name: string) {
    this.name = name;
  }

  get latest() {
    if (!this.publisher) return {};
    return this.publisher.latest;
  }

  injectPublisher(publisher?: IPublisher) {
    if (!publisher) return;
    this.publisher = publisher;
  }

  notify(data: any) {
    this.publish(data);
  }

  publish(data: any) {
    if (!this.publisher) return;
    this.publisher.publish(data);
  }

  subscribe(subscriber, name?: string) {
    if (!this.publisher) return;
    return this.publisher.subscribe(subscriber, name);
  }

  hasSubscriber(subscriber: ISubscriber | string) {
    if (!this.publisher) return;
    return this.publisher.hasSubscriber(subscriber);
  }

  notifyError(error: any) {
    this.publish({ ...error });
  }

  clear() {
    if (!this.publisher) return;
    this.publisher.clear();
    this.publisher = undefined;
  }
}
