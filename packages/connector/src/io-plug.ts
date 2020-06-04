import { IIOSocket, IIOPlug } from "./types";
import { IOConnectorPart } from "./connector-part";

export class IOPlug extends IOConnectorPart implements IIOPlug {
  socket: IIOSocket;

  constructor(opts: any = {}) {
    super(opts);
    this.socket = opts.socket;
  }

  onEvent = (data: any) => {
    if (!this.latest) return;
    this.latest.data = data;
    this.notify(data);
  };

  onError = (error: any) => {
    if (!this.latest) return;
    this.latest.error = error;
    this.notifyError(error);
  };

  notify(data: any): any {
    this.socket.notify(data);
    if (!this.connector) return;
    this.connector.notify(data);
  }

  notifyError(error: any): any {
    if (!this.connector) return;
    this.connector.notifyError(error);
  }

  plugInto(socket: IIOSocket) {
    // this.checkCompatibility(plug);
    this.socket = socket;
    socket.accept(this);
  }
}
