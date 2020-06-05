import { IEntityController } from "../../controllers";
import { IRegistry } from "@appgenerator/api";
import { IEventDispatcher } from "@appgenerator/eventstream";
import { IListDisplay } from "@appgenerator/views";
import { IMaterializedView } from "@appgenerator/materialized-views";

export interface IPropertyView {
  render(): any;
}

export class PropertyView {
  controller?: IEntityController;
  view?: IListDisplay;
  dispatcher?: IEventDispatcher;
  registry?: IRegistry;
  materializedView?: IMaterializedView;

  constructor(public name: string) {}

  injectRegistry(registry: IRegistry) {
    this.registry = registry;
  }

  injectMaterializedView(materializedView: IMaterializedView) {
    this.materializedView = materializedView;
  }

  injectController(controller: IEntityController) {
    this.controller = controller;
  }

  injectDispatcher(dispatcher: IEventDispatcher) {
    this.dispatcher = dispatcher;
  }
}
