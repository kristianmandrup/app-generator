import { INotifyTarget } from "./types";

export class Notifiable {
  _notifyTarget?: INotifyTarget;

  injectNotifyTarget(notifyTarget: INotifyTarget) {
    this._notifyTarget = notifyTarget;
  }

  notifyTarget(data: any) {
    if (!this._notifyTarget) return;
    this._notifyTarget.notify(data);
  }
}
