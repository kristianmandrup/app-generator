import { ILatest } from "./types";
import { IEventStream } from "@appgenerator/eventstream";

export interface IConnectable {
  name: string;
  setStream(eventStream: IEventStream);
}

// used by View, Controller etc to connect to a Connector to be:
// - notified by incoming data/events
// - to publish outgoing data/events
export class Connectable implements IConnectable {
  name: string;
  eventStream?: IEventStream;

  constructor(name: string = "connectable") {
    this.name = name;
  }

  setStream(eventStream: IEventStream) {
    this.eventStream = eventStream;

    this.eventStream.subscribe(this);
    this.notifyNotifier(data);
    return this;
  }

  injectNotifier(notifier: INotifier) {
    this.notifier = notifier;
  }

  notifyNotifier(data: any) {
    if (!this.notifier) return;
    this.notifier.notify(data);
  }
}
