import { Schema } from "./schema";
import { IRegistry } from "@appgenerator/registry";

export interface IFactory {
  name: string;
  build(schema?: Schema): any;
  register(registry: IRegistry, name?: string): any;
}

export interface IBuilder {
  build(schema?: Schema): any;
}
