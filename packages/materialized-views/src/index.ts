import * as controller from "./controller";
import * as selector from "./selector";
import * as listener from "./listener";

export interface IMaterializedView {}

export const materializedView = {
  controller,
  selector,
  listener,
};
