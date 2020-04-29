import { IIOSocket } from './io-socket';

export interface IIOPlug {
  plugInto(socket: IIOSocket)
}

export class IOPlug {
  plugInto(socket: IIOSocket) {
    this.socket = socket
  }
}