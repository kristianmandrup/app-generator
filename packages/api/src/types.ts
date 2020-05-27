export interface IRegistry {
  store: any;
  name: string;

  add(name: string, factory: any);
  get(name: string): any;
}
