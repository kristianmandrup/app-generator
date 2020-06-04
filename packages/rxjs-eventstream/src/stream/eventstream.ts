import { IEventSubscriber, IEvent } from "@appgenerator/eventstream";
import { Subject } from "rxjs";

export class EventStream {
  name: string;
  subscribers: {
    [key: string]: IEventSubscriber[];
  } = {};

  subject?: Subject<IEvent>;

  constructor(name: string) {
    this.name = name;
    this.init();
  }

  get topics() {
    return Object.keys(this.subscribers);
  }

  get allSubscribers() {
    return Object.values(this.subscribers).flatMap((x) => x);
  }

  subscribersFor(topic: string) {
    return Object.values(this.subscribers[topic]);
  }

  hasSubscribers(): boolean {
    return this.allSubscribers.length > 0;
  }

  hasSubscribersFor(topic: string): boolean {
    return this.subscribersFor(topic).length > 0;
  }

  protected withSubscribers(subscribers, fnName, ...args: any[]) {
    if (subscribers.length == 0) return;
    subscribers.map((subscriber) => subscriber[fnName](...args));
  }

  protected withNamedSubscribers(name, fnName, ...args: any[]) {
    this.withSubscribers(this.named(name), fnName, ...args);
  }

  protected withAllSubscribers(fnName: string = "onEvent", ...args: any[]) {
    this.allSubscribers.map((subscribers) => {
      this.withSubscribers(subscribers, fnName, ...args);
    });
  }

  init() {
    if (!this.hasSubscribers) return;
    const subject = new Subject<IEvent>();
    subject.subscribe({
      next: this.onNext,
      error: this.onError,
      complete: this.onComplete,
    });
    this.subject = subject;
  }

  protected onNext = (value) => {
    this.withAllSubscribers("onEvent", value);
  };

  protected onComplete = () => {
    this.withAllSubscribers("onComplete");
  };

  protected onError = (event) => {
    const { name } = event;
    if (!name) return;
    this.withNamedSubscribers(name, "onError", event);
  };

  publish(event) {
    if (!this.subject) return;
    this.subject.next(event);
  }

  error(event) {
    if (!this.subject) return;
    this.subject.error(event);
  }

  complete() {
    if (!this.subject) return;
    this.subject.complete();
  }

  // TODO: generalize
  subscribe(subscriber: IEventSubscriber, name?: string) {
    this.init();
    name = name || subscriber.name;
    this.subscribers[name] = this.subscribers[name] || [];
    this.subscribers[name].push(subscriber);
  }

  protected subscriberName(subscriber: string | IEventSubscriber): string {
    return typeof subscriber === "string" ? subscriber : subscriber.name;
  }

  named(name: string): IEventSubscriber[] {
    return this.subscribers[name];
  }

  unsubscribeAll() {
    this.subscribers = {};
  }

  unsubscribeAllFor(key: string) {
    delete this.subscribers[key];
  }

  unsubscribe(key: string, subscriber: string | IEventSubscriber) {
    const subscribers = this.subscribers[key].filter(($subscriber) =>
      typeof subscriber === "string"
        ? $subscriber.name === subscriber
        : $subscriber.isIdentical(subscriber)
    );
    this.subscribers[key] = subscribers;
    if (this.subscribers[key].length === 0) {
      delete this.subscribers[key];
    }
  }
}
