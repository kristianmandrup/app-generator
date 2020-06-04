import { IEventSubscriber } from "@appgenerator/eventstream";

export interface IEventStream {
  subscribe(subscriber: IEventSubscriber, name?: string);
  named(name: string);
  unsubscribe(subscriber: string | IEventSubscriber);
}
