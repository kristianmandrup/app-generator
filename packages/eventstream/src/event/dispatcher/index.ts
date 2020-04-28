import { IEvent } from '../types';
import { IEventStream } from '../../stream';

export class EventDispatcher {
  store = {}
  list = []
  eventStream: IEventStream

  constructor(public eventStream: IEventStream, name?: string) {
    this.name = name
  }

  dispatch(event: IEvent) {    
    eventStream.dispatch(event)
    this.list.push(event)
    this.store[event.name] = this.store[event.name] || []
    this.store[event.name].push(event)
  }
}