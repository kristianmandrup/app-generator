import { IEventSubscriber, IEvent } from "@appgenerator/eventstream";
import { IIOConnector } from "@appgenerator/connector";

export interface IMVController {
  data: any;
  subscriberList: IEventSubscriber[];
  subscribeWith(subscriber: IEventSubscriber, name?: string);
  onEvent(event: IEvent);
  notifyAll();
  updateStore(event: IEvent);
}

export interface IMaterializedView {
  data(): any;
  setController(controller: IMVController);
  connectTo(connector: IIOConnector);
  notify(data);
  // update(_data)
  onUpdated(mvData: any);
}
