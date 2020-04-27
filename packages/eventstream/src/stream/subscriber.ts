export interface ISubscriber {
  constructor(public name: string) {    
  }

  subscribeTo(eventStream: EventStream) {
    eventStream.subscribe(this)
  }

  unsubscribeFrom(eventStream: EventStream) {
    eventStream.unsubscribe(this)
  }
}