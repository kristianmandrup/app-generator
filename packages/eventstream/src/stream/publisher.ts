import { EventStream } from './index';
import { IEvent } from '../event/types';

export class Publisher {

  to(eventStream: EventStream) {
  }

  publish(event: IEvent) {
    this.eventStream.publish(event)
  }
}