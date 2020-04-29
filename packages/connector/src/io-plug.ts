import { IIOSocket } from './io-socket';
import { IIOConnectorPart, IOConnectorPart } from './connector-part';

export interface IIOPlug extends IIOConnectorPart {
  socket: IIOSocket
  plugInto(socket: IIOSocket)
}

export class IOPlug extends IOConnectorPart implements IIOPlug {
  socket: IIOSocket

  get latest() {
    return this.connector.latest
  }

  onNext = (value: any) => {
    this.latest.value = value
    this.notify(value)
  }

  onError = (error: any) => {
    this.latest.error = error
    this.notifyError(error)  
  }

  notify(data: any): any {
    this.socket.notify(data)
    this.connector.notify(data);    
  }

  notifyError(error: any): any {
    this.connector.notifyError(error);    
  }

  plugInto(socket: IIOSocket) {
    this.checkCompatibility(plug)
    this.socket = socket
    socket.accept(this)
  }
}