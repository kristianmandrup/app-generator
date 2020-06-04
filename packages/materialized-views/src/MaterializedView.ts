import { IMaterializedView, IMVController } from "./types";
import { IEventSubscriber } from "@appgenerator/eventstream";

export class MaterializedView implements IMaterializedView {
  name: string;
  controller?: IMVController;

  get data() {
    if (!this.controller) return {};
    return this.controller.data;
  }

  constructor(name: string) {
    this.name = name;
  }

  setController(controller: IMVController) {
    this.controller = controller;
    return this;
  }

  subscribeWith(subscriber: IEventSubscriber, name?: string) {
    if (!this.controller) return;
    this.controller.subscribeWith(subscriber, name);
  }
}
