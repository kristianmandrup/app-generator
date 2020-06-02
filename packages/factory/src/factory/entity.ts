import { Factory } from "./base";
// import { materializedView } from "../../../materialized-views/src/index";

export class EntityFactory extends Factory {
  // name: string;
  // build() {
  //   const { name, registry } = this;
  //   const { entity } = registry;
  //   const { controllers, models, views, materializedViews } = entity;
  //   const { listener, selector, controller, subscriber } = materializedViews;
  //   const listEvent = `${name}:list`;
  //   const { list } = views;
  //   subscriber.init = (instance) => {
  //     instance.subscribe(listEvent);
  //   };
  //   selector.init = (instance) => {
  //     instance.setQuery((data) => data.list);
  //     instance.addViewTarget(list.instance);
  //     // instance.injectMaterializedView(controller.instance)
  //   };
  //   listener.init = (instance) => {
  //     instance.injectNotifyTarget(selector.instance);
  //   };
  //   controller.init = (instance) => {
  //     instance.subscribeWith(subscriber.instance);
  //     instance.addListener(listener.instance);
  //   };
  // }
}
