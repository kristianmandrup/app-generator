import { Subject } from "rxjs";
import {
  EventSubscriber as _EventSubscriber,
  IEvent,
  IEventError,
  ILatest,
} from "@appgenerator/eventstream";
import { IEventStream } from "../../stream";

export class RxEventSubscriber extends _EventSubscriber {
  latest: ILatest = {};
  completed: boolean = false;
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

  onEvent(event: IEvent) {
    this.latest.data = event;
  }

  notify(event: IEvent) {
    this.onEvent(event);
  }

  onError(event: IEventError) {
    this.latest.error = event;
  }

  onComplete() {
    this.completed = true;
  }
}
