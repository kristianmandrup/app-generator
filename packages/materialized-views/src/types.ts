export interface ISelectQuery {
  run(data: any): any
}

export interface ISelector {
  notify(data)
  select(): any
}

export interface IMVListener {
  injectNotifyTarget(notifyTarget: INotifyTarget)
  listenTo(materializedView: IMaterializedView, name?: string)
  notify(data: any): any
}

export interface INotifyTarget {
  notify(data: any)
}

export interface IMaterializedView {
  get data(): any

  subscribeWith(subscriber: IEventSubscriber, name?: string)
  addListener(listener: IEventListener, name?: string)
  onEvent(event)  
  notifyAll()
  updateStore(event)
}

