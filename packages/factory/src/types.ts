import { Schema, SchemaEntity } from "./schema";
import { IRegistry } from "@appgenerator/registry";

export interface ISchema {
  entities(query?: any): SchemaEntity[];
}

export interface IFactory {
  name: string;
  build(schema?: Schema): any;
  register(registry: IRegistry, name?: string): any;
}

export interface IBuilder {
  build(schema?: Schema): any;
}
