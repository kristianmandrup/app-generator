import { IEventStream } from "../stream";

export interface IEventSubscriber {
  name: string;
  isIdentical(subscriber: IEventSubscriber): boolean;
  subscribeTo(eventStream: IEventStream);
  unsubscribeFrom(eventStream: IEventStream);
  onEvent(event: IEvent);
  notify(event: IEvent);
  onError(error: IEventError);
}

export interface IEventDispatcher {
  dispatch(event: IEvent);
}

export interface IEvent {
  uuid: string;
  name: string;
  type: string;
  data: any;
  timestamp: any;
}

export interface IEventError extends IEvent {
  message: string;
  code: number;
}

export interface IEventPublisher {
  to(eventStream: IEventStream);
  publish(event: IEvent);
}
