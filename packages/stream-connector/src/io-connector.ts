import { StreamIOPlug } from "./io-plug";
import { StreamIOSocket } from "./io-socket";
import {
  IOConnector,
  IPlugMap,
  ISocketMap,
} from "../../connector/src/io-connector";

export class StreamIOConnector extends IOConnector {
  plugMap: IPlugMap = {};
  socketMap: ISocketMap = {};

  connect(socket: StreamIOSocket, plug: StreamIOPlug) {
    socket.accept(plug);
  }
}
