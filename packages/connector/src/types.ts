import { IEventStream } from "@appgenerator/eventstream";

export interface INotifiable {
  injectNotifyTarget(notifyTarget: INotifyTarget);
  notifyTarget(data: any);
}

export interface INotifyTarget {
  notify(data: any);
  notifyError(error: any);
}

export interface IPlugMap {
  [key: string]: IIOPlug;
}

export interface ISocketMap {
  [key: string]: IIOSocket;
}

export interface IConnectable {
  name: string;
  setStream(eventStream: IEventStream);
}

export interface ILatest {
  ignored?: any;
  data?: any;
  error?: any;
  published?: any;
}

export interface IConnectorLatest extends ILatest {
  plug?: IIOPlug;
  socket?: IIOSocket;
}

export interface IIOConnectorPart {
  name: string;
  type: string;
  connector?: IIOConnector;
  latest: ILatest;
}

export interface IIOPlug extends IIOConnectorPart {
  socket: IIOSocket;
  plugInto(socket: IIOSocket);
  notify(data: any);
  notifyError(error: any);
  onEvent(data: any);
  onError(error: any);
}

export interface IIOSocket extends IIOConnectorPart {
  type: string;
  accept(plug: IIOPlug);
  notify(data: any);
  setNotifiable(notifiable?: INotifiable);
  injectNotifyTarget(notifyTarget: INotifyTarget);
}

export type TSocket = IIOSocket | string;
export type TPlug = IIOPlug | string;

export interface IOConnectorAddParams {
  socket: TSocket;
  plug: TPlug;
}

export interface IIOConnector {
  type: string;
  latest: IConnectorLatest;

  socketNames: string[];
  sockets: IIOSocket[];
  plugNames: string[];
  plugs: IIOPlug[];

  addPair(name: string, autoConnect?: boolean);
  add(opts: IOConnectorAddParams);
  addSocket(socket: IIOSocket);
  addPlug(plug: IIOPlug);

  createSocket(name: string);
  createPlug(name: string);

  connectNamed(from: string, to: string);
  connect(socket: IIOSocket, to: IIOPlug);

  plugNamed(name: string);
  socketNamed(name: string);

  notify(data: any);
  notifyError(error: any);
}
