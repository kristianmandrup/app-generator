import { IEventSubscriber } from '../event/subscriber/index';

export interface IEventStream {
  subscribe(subscriber: any, name?: string)
  named(name: string)
  unsubscribe(subscriber: string | IEventSubscriber)
}