import { IIOPlug } from './io-plug';

export interface IIOSocket {
  accept(plug: IIOPlug)
}

export class IOSocket {
  plug: IIOPlug

  accept(plug: IIOPlug) {
    this.plug = plug
  }
}