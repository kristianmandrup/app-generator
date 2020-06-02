import { IEventDispatcher, IEvent } from "@appgenerator/eventstream";

export class BaseController {
  dispatcher?: IEventDispatcher;

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatch(event: IEvent) {
    if (!this.dispatcher) return;
    this.dispatcher.dispatch(event);
  }
}
