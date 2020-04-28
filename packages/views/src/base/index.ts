import { IEventDispatcher } from '../../../../eventstream/src/event/dispatcher/index';
import { IMaterializedView } from '../../../materialized-views/src/types';

export interface IView {
  dispatch(event: IEvent)
  render(): any
}

export class BaseView implements IView {
  dispatcher: IEventDispatcher
  selector: ISelector

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher
  }

  injectSelector(selector: ISelector) {
    this.selector = selector
  }

  dispatch(event: IEvent) {
    this.dispatcher.dispatch(event)
  }

  render(): any {
    return null
  }
}