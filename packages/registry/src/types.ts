import { IFactory } from "@appgenerator/factory";

export type IRegistryMap = {
  [key: string]: IRegistry;
};

export type IFactoryMap = {
  [key: string]: IFactory;
};

export interface IRegistry {
  name: string;

  store: IFactoryMap;
  registries: IRegistryMap;

  build(): any;
}
