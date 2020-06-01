import { IPublisher } from "./publisher";
import { IEvent, IEventError } from "./event";

export interface ISubscriber {
  name: string;

  unsubscribe(name: string);
  subscribeTo(publisher: IPublisher);

  notify(event: IEvent);
  notifyError(error: IEventError);
  onEvent(_event: IEvent);
  onError(_error: IEventError);
}

export class Subscriber {
  name: string;
  subscribedTo: {
    [key: string]: IPublisher;
  } = {};

  constructor(name: string) {
    this.name = name;
  }

  subscribeTo(publisher: IPublisher) {
    this.subscribedTo[publisher.name] = publisher;
    publisher.subscribe(this);
  }

  unsubscribe(name: string) {
    delete this.subscribedTo[name];
  }

  notify(event: IEvent) {
    this.onEvent(event);
  }

  notifyError(error: IEventError) {
    this.onError(error);
  }

  onEvent(_event: IEvent) {}

  onError(_error: IEventError) {}
}
