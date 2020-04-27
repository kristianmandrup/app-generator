import { IEntityController } from '../../controllers/entity/controller/types';
import { IEventDispatcher } from '../../../../eventstream/src/event/dispatcher/index';
export interface IEntityView {
  render(): any
}

export class EntityView {
  controller: IEntityController
  dispatcher: IEventDispatcher

  constructor(public name: string) {
  }

  injectMaterializedView(materializedView: IEntityController) {
    this.materializedView = materializedView
  }

  injectController(controller: IEntityController) {
    this.controller = controller
  }

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher
  }

  render(): any {

  }
}