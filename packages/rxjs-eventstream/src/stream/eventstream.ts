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

  get subscriberList() {
    return Object.values(this.subscribers);
  }

  init() {
    const subject = new Subject<IEvent>();
    subject.subscribe({
      next: (value: any) => {
        this.subscriberList.map((subscribers) => {
          subscribers.map((subscriber) => subscriber.onEvent(value));
        });
      },
      error: (error) => {
        this.onError(error);
      },
      complete: () => {
        this.onComplete();
      },
    });
    this.subject = subject;
  }

  onComplete() {}

  onError(error) {
    const { name } = error;
    const subscribers = this.named(name);
    subscribers.map((subscriber) => subscriber.onError(error));
  }

  publish(event) {
    if (!this.subject) return;
    this.subject.next(event);
  }

  // TODO: generalize
  subscribe(subscriber: IEventSubscriber, name?: string) {
    this.init();
    name = name || subscriber.name;
    this.subscribers[name] = this.subscribers[name] || [];
    this.subscribers[name].push(subscriber);
  }

  subscriberName(subscriber: string | IEventSubscriber): string {
    return typeof subscriber === "string" ? subscriber : subscriber.name;
  }

  named(name: string): IEventSubscriber[] {
    return this.subscribers[name];
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
