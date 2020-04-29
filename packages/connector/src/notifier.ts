export interface INotifier {
  injectNotifyTarget(notifyTarget: INotifyTarget)
  notify(data: any)
  notifyError(error: any)
}

export class Notifier {
  notifyTarget: INotifyTarget
  
  injectNotifyTarget(notifyTarget: INotifyTarget) {
    this.notifyTarget = notifyTarget
  }
  
  notify(data: any) {
    this.notifyTarget.notify(data);    
  }
  
  notifyError(error: any) {
    this.notifyTarget.notifyError(error);    
  }  
}
