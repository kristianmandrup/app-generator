import { IIOConnector } from "./io-connector";

export interface IPublisher {
  publish(data: any);
}

export interface IPublishable {
  // subscribe(publisher: IPublisher);
  publish(data: any);
}

export class Publisher implements IPublisher {
  publishTarget?: IPublishable;
  connector?: IIOConnector;

  injectPublishTarget(target: IPublishable) {
    this.publishTarget = target;
  }

  injectConnector(connector: IIOConnector) {
    this.connector = connector;
  }

  publish(data: any) {
    if (!this.publishTarget) return;
    this.publishTarget.publish(data);
  }
}
