export interface INotifyTarget {
  notify(data: any);
  notifyError(error: any);
}

export interface INotifier {
  notifyTarget?: INotifyTarget;
  injectNotifyTarget?(notifyTarget: INotifyTarget);
  notify(data: any);
  notifyError(error: any);
}

export class Notifier {
  notifyTarget?: INotifyTarget;

  injectNotifyTarget(notifyTarget: INotifyTarget) {
    this.notifyTarget = notifyTarget;
  }

  notify(data: any) {
    if (!this.notifyTarget) return;
    this.notifyTarget.notify(data);
  }

  notifyError(error: any) {
    if (!this.notifyTarget) return;
    this.notifyTarget.notifyError(error);
  }
}
