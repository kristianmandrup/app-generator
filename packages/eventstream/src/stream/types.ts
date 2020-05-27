import { IEventSubscriber } from "../event";

export interface IEventStream {
  subscribe(subscriber: any, name?: string);
  named(name: string);
  unsubscribe(subscriber: string | IEventSubscriber);
  dispatch(event);
}
