import {
  IIOSocket,
  IIOPlug,
  IOConnectorAddParams,
  TSocket,
  TPlug,
  IConnectorLatest,
} from "./types";
import { IOPlug } from "./io-plug";
import { IOSocket } from "./io-socket";
import { IStoreCommander } from "@appgenerator/stores";
import { Connectable } from "./connectable";

export interface IPlugMap {
  [key: string]: IIOPlug;
}

export interface ISocketMap {
  [key: string]: IIOSocket;
}

export class IOConnector extends Connectable {
  plugMap: IPlugMap = {};
  socketMap: ISocketMap = {};

  dataStore?: IStoreCommander;
  errorStore?: IStoreCommander;
  type: string = "default";
  latest: IConnectorLatest = {};

  constructor(name: string) {
    super(name);
  }

  // subscribe(_subscriber, _name?: string) {}

  // called by plug
  protected onData(data: any) {
    this.storeDataReceived(data);
    this.notifyAcceptingSockets(data);
  }

  protected storeDataReceived(data: any) {
    this.latest.data = data;
    if (!this.dataStore) return;
    this.dataStore.update(data);
    return this;
  }

  protected onError(error: any): any {
    this.storeErrorReceived(error);
    const sockets = this.socketsAccepting(error);
    this.notifySockets(sockets, error);
  }

  protected storeErrorReceived(error: any) {
    this.latest.error = error;
    if (!this.errorStore) return;
    this.errorStore.update(error);
    return this;
  }

  // TODO: protected
  notifyAcceptingSockets(data: any) {
    const sockets = this.socketsAccepting(data);
    this.notifySockets(sockets, data);
    return this;
  }

  // TODO: protected
  protected notifySockets(sockets: IIOSocket[], data: any) {
    sockets.map((socket) => socket.notify(data));
    return this;
  }

  // TODO: protected
  protected socketsAccepting(_data: any) {
    return [];
  }

  add({ socket, plug }: IOConnectorAddParams) {
    this.addPlug(plug);
    this.addSocket(socket);
    this.connectLatest();
  }

  addSocket(socket: TSocket) {
    if (!socket) return;
    const $socket =
      typeof socket === "string" ? this.createSocket(socket) : socket;
    this.socketMap[$socket.name] = $socket;
    this.latest.socket = $socket;
    return this;
  }

  addPlug(plug: TPlug) {
    if (!plug) return;
    const $plug = typeof plug === "string" ? this.createPlug(plug) : plug;
    this.plugMap[$plug.name] = $plug;
    this.latest.plug = $plug;
    return this;
  }

  createSocket(name: string) {
    return new IOSocket({ name, connector: this });
  }

  createPlug(name: string): IIOPlug {
    return new IOPlug({ name, connector: this });
  }

  connectNamed(from: string, to: string) {
    const socket = this.socketNamed(to);
    const plug = this.plugNamed(from);
    this.connect(socket, plug);
  }

  connectLatest() {
    const { latest } = this;
    const { socket, plug } = latest;
    if (!plug || !socket) return;
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

  clear() {
    this.clearSockets();
    this.clearPlugs();
  }

  clearSockets() {
    this.socketMap = {};
    return this;
  }

  clearPlugs() {
    this.plugMap = {};
    return this;
  }
}
