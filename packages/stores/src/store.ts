import { IStoreCommander } from "./store-commander";

export interface IStoreData {
  [key: string]: any;
}

export interface IStore {
  data: IStoreData;
  history: any[];
  commander?: IStoreCommander;

  addHistory(command, data);
  update(data);
  addTo(name: string, data);
  removeFrom(name: string);
  toggle(name: string);
  deleteKeys(names: string[] | string);
}

export class Store {
  data: any = {};
  history: any[] = [];
  commander?: IStoreCommander;

  get latestHistory() {
    return this.history.length > 0 ? this.history[this.history.length - 1] : {};
  }

  addHistory(command, data) {
    this.history.push({ command, ...data });
  }

  injectCommander(commander: IStoreCommander) {
    commander.store = this;
    this.commander = commander;
  }

  update(data) {}
  addTo(name: string, data) {}
  removeFrom(name: string) {}
  toggle(name: string) {}
  deleteKeys(names: string[] | string) {}
}
