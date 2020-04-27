import { IEventDispatcher } from '../../../../eventstream/src/event/dispatcher/index';

export class BaseController {
  dispatcher: IEventDispatcher

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher
  }
}