import { IEventSubscriber, IEvent } from "@appgenerator/eventstream";

export interface IMVController {
  data: any;
  subscriberList: IEventSubscriber[];
  subscribeWith(subscriber: IEventSubscriber, name?: string);
  onEvent(event: IEvent);
  notifyAll();
  updateStore(event: IEvent);
}

export interface IMVListener {
  injectNotifyTarget(notifyTarget: INotifyTarget);
  listenTo(materializedView: IMaterializedView, name?: string);
  notify(data: any): any;
}

export interface INotifyTarget {
  notify(data: any);
}

export interface IMaterializedView {
  data(): any;
  setController(controller: IMVController);
  subscribeWith(subscriber: IEventSubscriber, name?: string);
}
