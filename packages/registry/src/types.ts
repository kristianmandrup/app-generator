export type IRegistryMap = {
  [key: string]: IRegistry;
};

export type IEntryMap = {
  [key: string]: any;
};

export interface IRegistry {
  name: string;
  path: string;

  entryMap: IEntryMap;
  registryMap: IRegistryMap;

  entryList: any[];
  registryList: IRegistry[];
  addEntry(entry: any, name?: string);
  addRegistry(registry: IRegistry, name?: string);
  addEntryMap(entryMap: any);

  named(name: string): any;
  mapAtPath(path: string): any;
  atPath(path: string): IRegistry;

  ensureRegistryAtPath(path: string);

  registryNamed(name: string): IRegistry;
  registerMap(factoryMap: any): any;
}
