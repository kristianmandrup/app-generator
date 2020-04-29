import { IIOPlug } from './io-plug';
import { IIOSocket } from './io-socket';

interface IPlugMap {
  [key: string]: IIOPlug
}

interface ISocketMap {
  [key: string]: IIOSocket
}

export class IOConnector {
  plugMap: IPlugMap
  socketMap: ISocketMap

  connectNamed(from: string, to: string) {
    const socket = this.socketNamed(to)
    const plug = this.plugNamed(from)
    this.connect(socket, plug)
  }

  connect(socket: IIOSocket, to: IIOPlug) {
    socket.accept(plug)
  }

  plugNamed(string: name) {
    return this.plugMap[name]
  }

  socketNamed(string: name) {
    return this.socketMap[name]
  }

  get socketNames(): string[] {
    return Object.keys(this.socketMap)
  }

  get sockets(): IIOSocket[] {
    return Object.values(this.socketMap)
  }
  
  get plugNames() : string[] {
    Object.keys(this.plugMap)
  }

  get sockets(): IIOPlug[] {
    return Object.values(this.plugMap)
  }
}