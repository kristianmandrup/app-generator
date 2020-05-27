export class Registry {
  store = {};
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  add(name: string, factory: any) {
    this.store[name] = factory;
  }

  get(name: string) {
    return this.store[name];
  }
}
