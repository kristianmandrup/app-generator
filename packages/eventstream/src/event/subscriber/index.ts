import { IEventStream } from "../../stream/types";
import { IEventError, IEventSubscriber, IEvent, ILatest } from "../types";

export class EventSubscriber implements IEventSubscriber {
  latest: ILatest = {};

  constructor(public name: string) {}

  isIdentical(subscriber: IEventSubscriber): boolean {
    return this === subscriber || this.name === subscriber.name;
  }

  subscribeTo(eventStream: IEventStream) {
    eventStream.subscribe(this);
  }

  unsubscribeFrom(eventStream: IEventStream) {
    eventStream.unsubscribe(this);
  }

  notify(event: IEvent) {
    this.onEvent(event);
  }

  onEvent(_event: IEvent) {}

  onError(_error: IEventError) {}

  onComplete() {}
}
