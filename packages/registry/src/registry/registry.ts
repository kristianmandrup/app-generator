import { IRegistry, IRegistryMap, IEntryMap } from "../types";

const isObject = (obj) => {
  return obj === Object(obj);
};

export class Registry implements IRegistry {
  name: string;
  path: string = this.name;
  entryMap: IEntryMap = {};
  registryMap: IRegistryMap = {};

  constructor(name: string, registries: any = {}) {
    this.name = name;
    this.registerMap(registries);
    this.init();
  }

  get entryList() {
    return Object.values(this.entryMap);
  }

  get registryList(): IRegistry[] {
    return Object.values(this.registryMap);
  }

  init() {}

  static createRegistry(name: string = "unknown"): IRegistry {
    return new Registry(name);
  }

  addEntry(entry: any, name?: string) {
    this.init();
    name = name || entry.name;
    if (!name) return;
    this.entryMap[name] = entry;
  }

  addRegistry(registry: IRegistry, name?: string) {
    this.init();
    name = name || registry.name;
    const path = [this.path, name].join(".");
    registry.path = path;
    this.registryMap[name] = registry;
  }

  ensureRegistryAtPath(path: string): IRegistry {
    const found = this.atPath(path);
    if (found) return found;
    const parts = path.split(".");
    const firstPart = parts[0];
    const remainingParts = parts.splice(1);
    let $map = this.registryNamed(firstPart);
    let $$map;
    for (let part of remainingParts) {
      $$map = $map[part];
      if (!$$map) {
        $map.addRegistry(new Registry(part));
        $$map = $map.registryNamed(part);
      }
      $map = $$map;
    }
    return $map;
  }

  addEntryMap(entryMap: any) {
    this.init();
    Object.entries(entryMap).map(([name, entry]) => {
      if (isObject(entry)) {
        this.addEntryMap(entry);
      }
      if ((entry as any).name) {
        this.addEntry(entry, name);
      } else {
        const registry = new Registry(name, entry);
        this.addRegistry(registry);
      }
    });
  }

  named(name: string): any {
    return this.entryMap[name];
  }

  atPath(path: string) {
    const parts = path.split(".");
    let $map;
    for (let part of parts) {
      $map = $map ? $map[part] : this.registryMap[part];
      if (!$map) return undefined;
    }
    return $map;
  }

  mapAtPath(path: string) {
    return this.atPath(path).entryMap;
  }

  registryNamed(name: string): IRegistry {
    return this.registryMap[name];
  }

  registerMap(factoryMap: any) {
    Object.values(factoryMap).map((registry) => {
      this.addEntryMap(registry);
    });
  }
}
