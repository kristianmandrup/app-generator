import { IEvent } from '../event/types';
import { IEventStream } from '../../stream';

export class EventPublisher {

  to(eventStream: IEventStream) {
  }

  publish(event: IEvent) {
    this.eventStream.publish(event)
  }
}