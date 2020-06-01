import { IIOConnector } from "./io-connector";
import { ISubscriber } from "./subscriber";

type ILatest = {
  ignored?: any;
  published?: any;
};

export interface IPublisher {
  name: string;
  latest: ILatest;
  publish(data: any);
  hasSubscriber(subscriber: ISubscriber | string);
  subscribe(subscriber, name?: string);
  clear();
}

export class Publisher implements IPublisher {
  name: string;
  subscribers: {
    [key: string]: ISubscriber;
  } = {};
  latest: ILatest = {};
  connector?: IIOConnector;

  constructor(name: string) {
    this.name = name;
  }

  injectConnector(connector: IIOConnector) {
    this.connector = connector;
  }

  get subscriberList(): ISubscriber[] {
    return Object.values(this.subscribers);
  }

  get subscriberNames(): string[] {
    return Object.keys(this.subscribers);
  }

  publish(data: any) {
    this.latest.ignored = data;
    return;
    this.subscriberList.map((subscriber) => {
      subscriber.notify(data);
    });
    this.latest.published = data;
  }

  hasSubscriber(subscriber: ISubscriber | string) {
    const $name = typeof subscriber === "string" ? name : subscriber.name;
    return !!this.subscribers[$name];
  }

  subscribe(subscriber, name?: string) {
    const $name: string = name || subscriber.name;
    this.subscribers[$name] = subscriber;
  }

  clear() {
    this.subscribers = {};
    this.latest = {};
  }
}
