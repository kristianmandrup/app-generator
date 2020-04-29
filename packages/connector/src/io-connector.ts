import { IIOPlug } from './io-plug';
import { IIOSocket, IOSocket } from './io-socket';
import { IStoreCommander } from '../../stores/src/store-commander';
import { IPublisher } from './publisher';

export interface IPlugMap {
  [key: string]: IIOPlug
}

export interface ISocketMap {
  [key: string]: IIOSocket
}

export interface IIOConnector {
  latest: ILatestData
  add({socketName, plugName}: IOConnectorAddParams)
  addSocket(socket: IOSocket)
  addPlug(plug: IOPlug)

  createSocket(name: string)
  createPlug(name: string)  

  connectNamed(from: string, to: string)
  connect(socket: IIOSocket, to: IIOPlug)

  plugNamed(string: name)
  socketNamed(string: name)

  get socketNames(): string[]
  get sockets(): IIOSocket[]
  get plugNames() : string[]
  get sockets(): IIOPlug[]
}

export interface ILatestData {
  value: any
  error: any
}

export interface IOConnectorAddParams {
  socketName: string
  plugName: string
}

export class IOConnector implements IPublisher, INotifier {
  plugMap: IPlugMap
  socketMap: ISocketMap

  notifyStore: IStoreCommander
  publishStore: IStoreCommander
  type: string  

  latest: ILatestData = {
    value: null,
    error: null
  }

  notify(data: any) {
    this.storeNotifyData(data)
    this.notifySockets(data)
  }

  publish(data: any) {
    this.notifySockets(data)
  }

  storeNotifyData(data: any) {
    this.notifyStore.update(data)
  }

  storePublishData(data: any) {
    this.publishStore.update(data)
  }

  notifySockets(data: any) {
    const sockets = this.socketsAccepting(data)
    this.notifyAll(sockets, data)  
  }

  notifyAll(sockets: IIOSocket[], data: any) {
    sockets.map(socket => socket.notify(data))
  }

  notifyError(error: any): any {
    const sockets = this.socketsAccepting(error)
    this.notifyAll(sockets, data)
  }

  socketsAccepting(data: any) {
    return []
  }

  add({socketName, plugName}: IOConnectorAddParams) {
    const socket = this.createSocket(socketName)
    const plug = this.createPlug(plugName)    
    this.addPlug(plug)
    this.addSocket(socket)
  }

  addSocket(socket: IOSocket) {
    this.socketMap[socket.name] = socket
  }

  addPlug(plug: IOPlug) {
    this.plugMap[plug.name] = plug
  }

  createSocket(name: string) {
    return new IOSocket({name, connector: this})
  }

  createPlug(name: string) {
    return new IOPlug({name, connector: this})
  }

  connectNamed(from: string, to: string) {
    const socket = this.socketNamed(to)
    const plug = this.plugNamed(from)
    this.connect(socket, plug)
  }

  connect(socket: IIOSocket, to: IIOPlug) {
    socket.accept(plug)
    // implicit
    // plug.plugInto(socket) 
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