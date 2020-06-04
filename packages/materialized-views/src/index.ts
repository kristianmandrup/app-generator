import * as controller from "./controller";
import * as selector from "./selector";
export * from "./MaterializedView";
export * from "./types";

export interface IMaterializedView {}

export const materializedView = {
  controller,
  selector,
};
