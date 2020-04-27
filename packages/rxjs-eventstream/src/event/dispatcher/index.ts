import { IEvent } from '../types';
import { EventStream } from '../../stream/index';

export interface IEventDispatcher {
  dispatch(event: IEvent) {
}

export class EventDispatcher {
  store = {}
  list = []
  eventStream: EventStream

  constructor(public eventStream: EventStream, name?: string) {
    this.name = name
  }

  dispatch(event: IEvent) {    
    eventStream.dispatch(event)
    this.list.push(event)
    this.store[event.name] = this.store[event.name] || []
    this.store[event.name].push(event)
  }
}