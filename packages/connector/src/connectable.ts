import { IConnectable } from "./types";
import { IEventStream } from "@appgenerator/eventstream";
import { Notifiable } from "./notifiable";

// used by View, Controller etc to connect to a Connector to be:
// - notified by incoming data/events
// - to publish outgoing data/events
export class Connectable extends Notifiable implements IConnectable {
  name: string;
  eventStream?: IEventStream;

  constructor(name: string = "connectable") {
    super();
    this.name = name;
  }

  setStream(eventStream: IEventStream) {
    this.eventStream = eventStream;
    this.eventStream.subscribe(this);
    return this;
  }
}
