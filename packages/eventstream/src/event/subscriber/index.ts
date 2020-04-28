import { IEventStream } from '../../stream/types';
import { IEventError } from '../types';

export class EventSubscriber implements IEventSubscriber {
  constructor(public name: string) {    
  }

  subscribeTo(eventStream: IEventStream) {
    eventStream.subscribe(this)
  }

  unsubscribeFrom(eventStream: IEventStream) {
    eventStream.unsubscribe(this)
  }

  onEvent(event: IEvent) {
  }

  notify(event: IEvent) {
    this.onEvent(event)
  }

  onError(error: IEventError) {    
  }
}