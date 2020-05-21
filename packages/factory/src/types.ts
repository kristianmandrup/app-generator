import { Schema } from "./schema";
import { IRegistry } from "@registry";

export interface IFactory {
  build(schema?: Schema): any;
  register(registry: IRegistry, name?: string): any;
}

export interface IBuilder {
  build(schema?: Schema): any;
}
