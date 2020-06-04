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
}

export interface IIOSocket extends IIOConnectorPart {
  type: string;
  accept(plug: IIOPlug);
  notify(data: any);
}

export type TSocket = IIOSocket | string;
export type TPlug = IIOPlug | string;

export interface IOConnectorAddParams {
  socket: TSocket;
  plug: TPlug;
}

export interface IIOConnector {
  type: string;
  latest: ILatest;

  socketNames: string[];
  sockets: IIOSocket[];
  plugNames: string[];
  plugs: IIOPlug[];

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
