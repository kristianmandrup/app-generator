import { IIOPlug } from './io-plug';
import { IIOSocket } from './io-socket';
import { IOConnector } from '../../connector/src/io-connector';

export class StreamIOConnector extends IOConnector implements IIOConnector {
  plugMap: IPlugMap
  socketMap: ISocketMap

  connect(socket: IIOSocket, to: IIOPlug) {
    socket.accept(plug)
  }
}