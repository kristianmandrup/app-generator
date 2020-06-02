import { IIOSocket } from "./io-socket";
import { IIOConnectorPart, IOConnectorPart } from "./connector-part";

export interface IIOPlug extends IIOConnectorPart {
  socket: IIOSocket;
  plugInto(socket: IIOSocket);
  notify(data: any);
  notifyError(error: any);
}

export class IOPlug extends IOConnectorPart implements IIOPlug {
  socket: IIOSocket;

  constructor(opts: any = {}) {
    super(opts);
    this.socket = opts.socket;
  }

  get latest() {
    return this.connector && this.connector.latest;
  }

  onNext = (data: any) => {
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
