export class Connectable implements INotifier, IPublishable {
  notifier: INotifier

  injectNotifier(notifier: INotifier) {
    notifier.notifyTarget = this
    this.notifier = notifier
  }

  injectPublisher(publisher: IPublisher) {
    this.publisher = publisher
  }

  publish(data: any) {    
    this.publisher.publish(data)
  }  

  notify(data: any) {    
  }
  
  notifyError(error: any) {
  }  
}