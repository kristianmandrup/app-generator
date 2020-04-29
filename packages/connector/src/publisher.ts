import { IIOConnector } from './io-connector';

export interface IPublisher {
  publish(data: any)
}

export class Publisher implements IPublishable {
  publishTarget: IPublishable

  injectPublishTarget(target: IPublishable) {
    this.publishTarget = target
  }

  injectConnector(connector: IIOConnector) {
    this.injectPublishTarget(target)
  }

  publish(data: any) {
    this.publishTarget.publish(data)
  }
}