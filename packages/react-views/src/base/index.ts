import { IEventSubscriberm, IEventDispatcher } from "@appgenerator/eventstream";
import { IMaterializedView } from "@appgenerator/materialized-views";

export class BaseView implements IEventSubscriber {
  dispatcher: IEventDispatcher;

  // TODO: generalize
  listen(materializedView: IMaterializedView, name?: string) {
    materializedView.addListener(this);
  }

  notify(data: any): any {
    return data;
  }

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatch(event: IEvent) {
    this.dispatcher.dispatch(event);
  }

  render(): any {
    return null;
  }
}
