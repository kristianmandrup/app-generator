import { IOPlug } from "@appgenerator/connector";
import { IEventSubscriber } from "@appgenerator/eventstream";

export class StreamIOPlug extends IOPlug {
  subscriber?: IEventSubscriber;

  injectSubscriber(subscriber: IEventSubscriber) {
    subscriber.onEvent = this.onEvent;
    subscriber.onError = this.onError;
    this.subscriber = subscriber;
  }
}
