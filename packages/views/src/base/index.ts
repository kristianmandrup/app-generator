import { IEventDispatcher } from '../../../../eventstream/src/event/dispatcher/index';
import { IMaterializedView } from '../../../materialized-views/src/types';

export class BaseView {
  dispatcher: IEventDispatcher
  subcribers = {}

  // TODO: generalize
  subscribe(materializedView: IMaterializedView, name?: string) {
    name = name || materializedView.name
    this.subcribers[name] = materializedView
  }

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher
  }

  render(): any {
    return null
  }
}