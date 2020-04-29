export interface IStoreData {
  [key: string]: any
}

export interface IStore {
  data: IStoreData

  update(data)
  addTo(name: string, data)
  removeFrom(name: string)
  toggle(name: string)
  deleteKeys(names: string[] | string)
}

export class Store {
  data: {}
  history: []

  addHistory(command, data) {
    this.history.push({command, ...data})
  }

  injectCommander(commander: IStoreCommander) {
    commander.store = this
    this.commander = commander    
  }
}