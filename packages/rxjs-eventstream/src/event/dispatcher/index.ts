import { EventDispatcher } from "@appgenerator/eventstream";

export class RxEventDispatcher extends EventDispatcher {
  constructor(name: string) {
    super(name);
  }
}
