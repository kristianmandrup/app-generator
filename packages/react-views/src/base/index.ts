import { IEventDispatcher } from '../../../../eventstream/src/event/dispatcher/index';
import { IMaterializedView } from '../../../materialized-views/src/types';
import { IEventSubscriber } from '../../../eventstream/src/event/subscriber/index';

export class BaseView implements IEventSubscriber {
  dispatcher: IEventDispatcher

  // TODO: generalize
  listen(materializedView: IMaterializedView, name?: string) {
    materializedView.addListener(this)
  }

  notify(data: any): any {
    return data;    
  }

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher
  }

  dispatch(event: IEvent) {
    this.dispatcher.dispatch(event)
  }

  render(): any {
    return null
  }
}