import { IPublisher } from "./publisher";
import { INotifier } from "./notifier";

export interface IConnectableInjectParams {
  notifier: INotifier;
  publisher: IPublisher;
}

// used by View, Controller etc to connect to a Connector to be:
// - notified by incoming data/events
// - to publish outgoing data/events
export class Connectable implements INotifier, IPublisher {
  notifier?: INotifier;
  publisher?: IPublisher;

  constructor() {}

  inject({ notifier, publisher }: IConnectableInjectParams) {
    this.injectNotifier(notifier);
    this.injectPublisher(publisher);
  }

  injectNotifier(notifier: INotifier) {
    notifier.notifyTarget = this;
    this.notifier = notifier;
  }

  injectPublisher(publisher: IPublisher) {
    this.publisher = publisher;
  }

  publish(data: any) {
    if (!this.publisher) return;
    this.publisher.publish(data);
  }

  notify(data: any) {}

  notifyError(error: any) {}
}
