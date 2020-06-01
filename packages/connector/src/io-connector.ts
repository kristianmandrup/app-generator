import { IIOPlug, IOPlug } from "./io-plug";
import { IIOSocket, IOSocket } from "./io-socket";
import { IStoreCommander } from "@appgenerator/stores";
import { Connectable } from "./connectable";
import { ILatest } from "./publisher";

export interface IPlugMap {
  [key: string]: IIOPlug;
}

export interface ISocketMap {
  [key: string]: IIOSocket;
}

export interface IIOConnector {
  type: string;
  latest: ILatest;

  socketNames: string[];
  sockets: IIOSocket[];
  plugNames: string[];
  plugs: IIOPlug[];

  add({ socketName, plugName }: IOConnectorAddParams);
  addSocket(socket: IOSocket);
  addPlug(plug: IOPlug);

  createSocket(name: string);
  createPlug(name: string);

  connectNamed(from: string, to: string);
  connect(socket: IIOSocket, to: IIOPlug);

  plugNamed(name: string);
  socketNamed(name: string);

  notify(data: any);
  notifyError(error: any);
}

export interface IOConnectorAddParams {
  socketName: string;
  plugName: string;
}

export class IOConnector extends Connectable {
  plugMap: IPlugMap = {};
  socketMap: ISocketMap = {};

  notifyStore?: IStoreCommander;
  publishStore?: IStoreCommander;
  type: string = "default";

  constructor(name: string) {
    super(name);
  }

  subscribe(_subscriber, _name?: string) {}

  notify(data: any) {
    this.storeNotifyData(data);
    this.notifySockets(data);
  }

  publish(data: any) {
    this.notifySockets(data);
  }

  storeNotifyData(data: any) {
    if (!this.notifyStore) return;
    this.notifyStore.update(data);
  }

  storePublishData(data: any) {
    if (!this.publishStore) return;
    this.publishStore.update(data);
  }

  notifySockets(data: any) {
    const sockets = this.socketsAccepting(data);
    this.notifyAll(sockets, data);
  }

  notifyAll(sockets: IIOSocket[], data: any) {
    sockets.map((socket) => socket.notify(data));
  }

  notifyError(error: any): any {
    const sockets = this.socketsAccepting(error);
    this.notifyAll(sockets, error);
  }

  socketsAccepting(_data: any) {
    return [];
  }

  add({ socketName, plugName }: IOConnectorAddParams) {
    const socket = this.createSocket(socketName);
    const plug = this.createPlug(plugName);
    this.addPlug(plug);
    this.addSocket(socket);
  }

  addSocket(socket: IOSocket) {
    this.socketMap[socket.name] = socket;
  }

  addPlug(plug: IOPlug) {
    this.plugMap[plug.name] = plug;
  }

  createSocket(name: string) {
    return new IOSocket({ name, connector: this });
  }

  createPlug(name: string) {
    return new IOPlug({ name, connector: this });
  }

  connectNamed(from: string, to: string) {
    const socket = this.socketNamed(to);
    const plug = this.plugNamed(from);
    this.connect(socket, plug);
  }

  connect(socket: IIOSocket, plug: IIOPlug) {
    socket.accept(plug);
    // implicit
    // plug.plugInto(socket)
  }

  plugNamed(name: string) {
    return this.plugMap[name];
  }

  socketNamed(name: string) {
    return this.socketMap[name];
  }

  get socketNames(): string[] {
    return Object.keys(this.socketMap);
  }

  get sockets(): IIOSocket[] {
    return Object.values(this.socketMap);
  }

  get plugNames(): string[] {
    return Object.keys(this.plugMap);
  }

  get plugs(): IIOPlug[] {
    return Object.values(this.plugMap);
  }
}
