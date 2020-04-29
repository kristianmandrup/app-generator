import { IIOConnector } from './io-connector';
export class Publishable implements IPublishable {
  connector: IIOConnector

  publish(data: any) {
    this.connector.publish(data)
  }
}