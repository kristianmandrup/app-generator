import { IEntityController } from '../../controllers/entity/controller/types';
import { IEventDispatcher } from '../../../../eventstream/src/event/dispatcher/index';
import { IListDisplay } from '../../../../views/src/display/types';

export interface IEntityView {
  render(): any
}

export class EntityView {
  controller: IEntityController
  view: IListDisplay
  dispatcher: IEventDispatcher

  constructor(public name: string) {
  }

  injectRegistry(registry: IRegistry) {
    this.registry = registry
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
}