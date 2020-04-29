import { IOConnector, IIOPlug } from '../../connector/src';
import { IEventSubscriber } from '../../eventstream/src/event/types';

export class StreamIOPlug extends IOPlug implements IIOPlug {
  subscriber: IEventSubscriber  

  injectSubscriber(subscriber: IEventSubscriber) {
    subscriber.onNext = this.next
    subscriber.onError = this.onError
    this.subscriber = subscriber;
  }
}