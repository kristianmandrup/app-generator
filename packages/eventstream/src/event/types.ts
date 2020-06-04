import { IEventStream } from "../stream";

export type ILatest = {
  ignored?: any;
  data?: any;
  error?: any;
  published?: any;
};

export interface INotifyTarget {
  notify(event: IEvent);
}

export interface IEventSubscriber extends INotifyTarget {
  name: string;
  latest: ILatest;
  isIdentical(subscriber: IEventSubscriber): boolean;
  subscribeTo(eventStream: IEventStream);
  unsubscribeFrom(eventStream: IEventStream);
  onEvent(event: IEvent);
  notify(event: IEvent);
  onError(error: IEventError);
  onComplete();
}

export interface IEventDispatcher {
  name: string;
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
