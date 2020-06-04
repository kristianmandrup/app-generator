import { IEventDispatcher, IEvent, ILatest } from "../types";
import { IEventStream } from "../../stream";

export class EventDispatcher implements IEventDispatcher {
  store = {};
  list: any[] = [];

  name: string;
  latest: ILatest = {};
  eventStream?: IEventStream;

  constructor(name: string = "dispatcher") {
    this.name = name;
  }

  setStream(eventStream: IEventStream) {
    this.eventStream = eventStream;
    return this;
  }

  dispatch(event: IEvent) {
    this.process(event);
  }

  protected addToList(event: IEvent) {
    this.list.push(event);
  }

  protected process(event: IEvent) {
    if (!this.eventStream) {
      this.latest.ignored = event;
      return;
    }
    this.eventStream.dispatch(event);
    this.latest.published = event;
    this.addToList(event);
    this.storeEvent(event);
  }

  protected storeEvent(event: IEvent) {
    this.store[event.name] = this.store[event.name] || [];
    this.store[event.name].push(event);
  }
}
