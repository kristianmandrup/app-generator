import { Subject } from "rxjs";
import {
  EventSubscriber as _EventSubscriber,
  IEvent,
  IEventError,
} from "@appgenerator/eventstream";
import { IEventStream } from "../../stream";

export class EventSubscriber extends _EventSubscriber {
  subject?: Subject<IEvent>;
  // eventstream?: IEventStream;

  constructor(name: string) {
    super(name);
    this.init();
  }

  init() {}

  subscribeTo(eventstream: IEventStream) {
    // this.eventstream = eventstream;
    eventstream.subscribe(this);
  }

  onEvent(_event: IEvent) {}

  notify(event: IEvent) {
    this.onEvent(event);
  }

  onError(_error: IEventError) {}
}
