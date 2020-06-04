import { IIOPlug } from "./types";
import { IOConnectorPart } from "./connector-part";
import { INotifier } from "./notifier";

export class IOSocket extends IOConnectorPart {
  plug?: IIOPlug;
  notifier?: INotifier;

  accept(plug: IIOPlug) {
    this.checkCompatibility(plug);
    this.plug = plug;
    plug.plugInto(this);
  }

  notify(data: any) {
    this.notifyPlug(data);
  }

  notifyPlug(data: any) {
    if (!this.plug) return;
    this.plug.notify(data);
  }
}
