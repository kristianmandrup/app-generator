import { Factory } from "./base";
// import { materializedView } from "@appgenerator/materialized-views";

export class ServicesFactory extends Factory {
  // build() {
  //   const { name, registry } = this;
  //   const { entity, infra } = registry;
  //   const { services } = entity;
  //   const { controller, model, store } = services;
  //   const { subscriber } = infra;
  //   const event = `${name}:entity`;
  //   subscriber.init = ({ instance }) => {
  //     instance.subscribe(event);
  //   };
  //   controller.init = ({ instance, registry }) => {
  //     const subscriber = registry.get("subscriber", instance);
  //     instance.subscribeWith(subscriber);
  //   };
  //   model.init = ({ instance, registry }) => {
  //     const controller = registry.get("controller", instance);
  //     instance.injectController(controller);
  //     const store = registry.get("store", instance);
  //     instance.injectStore(store);
  //   };
  // }
}
