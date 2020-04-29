import { IIOPlug } from './io-plug';
import { IIOConnectorPart } from './connector-part';
import { INotifier } from './notifier';

export interface IIOSocket extends IIOConnectorPart {
  accept(plug: IIOPlug)
}

export class IOSocket extends IOConnectorPart {
  plug: IIOPlug
  notifier: INotifier

  injectNotifier(notifier: INotifier) {
    this.notifier = notifier
  }

  accept(plug: IIOPlug) {
    this.plug = plug
    plug.plugInto(this)
  }
}