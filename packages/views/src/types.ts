import { IEvent } from "@appgenerator/eventstream";

export interface IView {
  dispatch(event: IEvent);
  notify(data: any);
  render(): any;
}
