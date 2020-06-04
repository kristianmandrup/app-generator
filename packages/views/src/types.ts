import { IEvent, IEventSubscriber } from "@appgenerator/eventstream";

export interface IView extends IEventSubscriber {
  dispatch(event: IEvent);
  notify(data: any);
  render(): any;
}
