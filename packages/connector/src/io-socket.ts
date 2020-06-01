import { IIOPlug } from "./io-plug";
import { IIOConnectorPart, IOConnectorPart } from "./connector-part";
import { INotifier } from "./notifier";

export interface IIOSocket extends IIOConnectorPart {
  type: string;
  accept(plug: IIOPlug);
}

export class IOSocket extends IOConnectorPart {
  plug?: IIOPlug;
  notifier?: INotifier;

  injectNotifier(notifier: INotifier) {
    this.notifier = notifier;
  }

  accept(plug: IIOPlug) {
    this.checkCompatibility(plug);
    this.plug = plug;
    plug.plugInto(this);
  }
}
