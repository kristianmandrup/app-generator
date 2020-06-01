import { IEvent } from "../types";
import { IEventStream } from "../../stream";

export class EventPublisher {
  eventStream?: IEventStream;

  to(eventStream: IEventStream) {
    this.eventStream = eventStream;
  }

  publish(event: IEvent) {
    if (!this.eventStream) return;
    this.eventStream.onEvent(event);
  }
}
