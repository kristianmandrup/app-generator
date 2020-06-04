import { INotifyTarget, IIOPlug, INotifiable } from "./types";
import { IOConnectorPart } from "./connector-part";
import { Notifiable } from "./notifiable";

export class IOSocket extends IOConnectorPart {
  plug?: IIOPlug;
  notifiable?: INotifiable;

  accept(plug: IIOPlug) {
    this.checkCompatibility(plug);
    this.plug = plug;
    plug.plugInto(this);
  }

  injectNotifyTarget(notifyTarget: INotifyTarget) {
    this.notifiable = this.notifiable || new Notifiable();
    this.notifiable.injectNotifyTarget(notifyTarget);
    return this;
  }

  setNotifiable(notifiable?: INotifiable) {
    this.notifiable = notifiable;
    return this;
  }

  notify(data: any) {
    this.notifyPlug(data);
    if (!this.notifiable) return this;
    this.notifiable.notifyTarget(data);
    return this;
  }

  notifyPlug(data: any) {
    if (!this.plug) return;
    this.plug.notify(data);
  }
}
