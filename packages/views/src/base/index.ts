import { IEvent, IEventDispatcher } from "@appgenerator/eventstream";
import { ISelector } from "@appgenerator/selector";
import { IView } from "../types";

export class BaseView implements IView {
  dispatcher: IEventDispatcher;
  selector: ISelector;

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher;
  }

  injectSelector(selector: ISelector) {
    this.selector = selector;
  }

  dispatch(event: IEvent) {
    this.dispatcher.dispatch(event);
  }

  render(): any {
    return null;
  }

  notify(data: any) {
    this.value = this.selector.select();
  }
}
