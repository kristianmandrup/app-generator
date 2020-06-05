import { IMaterializedView, IMVController } from "./types";
import {
  connectTo,
  IIOConnector,
  IIOSocket,
  IIOPlug,
} from "@appgenerator/connector";

export class MaterializedView implements IMaterializedView {
  name: string;
  controller?: IMVController;
  connector?: IIOConnector;
  conn: {
    socket?: IIOSocket;
    plug?: IIOPlug;
  } = {};

  constructor(name: string) {
    this.name = name;
  }

  get data() {
    if (!this.controller) return {};
    return this.controller.data;
  }

  setController(controller: IMVController) {
    this.controller = controller;
    return this;
  }

  connectTo(connector: IIOConnector) {
    connectTo(this, connector, "mv:");
    return this;
  }

  // receive data from connector socket
  notify(data) {
    this.update(data);
  }
  notifyError(_data) {}

  // update view using data from connector
  protected update(_data) {}

  // notify connector plug with update
  onUpdated(mvData: any) {
    if (!this.conn.plug) return this;
    this.conn.plug.onEvent(mvData);
    return this;
  }

  updateController(data: any) {
    if (!this.controller) return;
    this.controller.onEvent(data);
  }

  onControllerData(data: any) {
    this.onUpdated(data);
  }
}
