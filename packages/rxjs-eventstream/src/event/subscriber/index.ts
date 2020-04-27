import { IEventStream } from '../../stream/types';

export interface IEventSubscriber {
  constructor(public name: string) {    
  }

  subscribeTo(eventStream: IEventStream) {
    eventStream.subscribe(this)
  }

  unsubscribeFrom(eventStream: IEventStream) {
    eventStream.unsubscribe(this)
  }
}