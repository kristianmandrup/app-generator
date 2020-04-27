export interface IMaterializedView {
  get data(): any

  subscribe(subscriber: IEventSubscriber, name?: string)
  addListener(listener: IEventListener, name?: string)
  onEvent(event)  
  notifyAll()
  updateStore(event)
}

