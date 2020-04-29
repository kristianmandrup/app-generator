export interface IStoreCommander {
  store: IStore
  get data()  
  addHistory(name, data)
  update(data)
  removeFrom(name: string, from: number, count: number = 1)
  addTo(name: string, data: any[])
  toggle(name: string)
  delete(names: string[] | string)
}

export class StoreCommander {
  store: IStore

  get data() {
    return this.store.data
  }

  addHistory(name, data) {
    this.store.addHistory(name, data)
  }

  update(data) {
    this.data = {
      ...this.data,
      ...data
    }
    this.addHistory('update', {data})
  }

  removeFrom(name: string, from: number, count: number = 1) {
    this.data[name] = this.data[name] || []
    if (!Array.isArray(this.data[name])) {
      throw new Error('store entry must be an array')
    }
    to ? this.data[name].splice(from, to) : this.data[name].splice(from)
  }

  addTo(name: string, data: any[]) {
    this.data[name] = this.data[name] || []
    if (!Array.isArray(this.data[name])) {
      throw new Error('store entry must be an array')
    }
    Array.isArray(data) ? this.data[name].push(...data) : this.data[name].push(data)
    this.addHistory('addTo', {name, data})
  }

  toggle(name: string) {
    const val = this.data[name]
    if (val == null || val == undefined) {
      this.data[name] = true
      return
    }
    if (typeof this.data[name] !== 'bool') {
      throw new Error(`store entry ${name} must be a boolean`)      
    }
    this.data[name] = !this.data[name]    
  }

  delete(names: string[] | string) {
    names = typeof names === 'string' ? [names] : names
    names.map(name => {
      if (this.data[name] == undefined) {
        throw new Error(`store entry ${name} does not exist`)      
      }
      delete this.data[name]
    })
    this.addHistory('delete', {names})
  }  
}