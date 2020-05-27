import { IIOConnector } from "./io-connector";

export interface IIOConnectorPart {
  name: string;
  connector: IIOConnector;
}

export class IOConnectorPart {
  name: string = "connector part";
  type: string = "unknown";
  connector?: IIOConnector;

  constructor({ name, connector }: any) {
    this.setName(name);
    this.partOf(connector);
  }

  isCompatible(part: IOConnectorPart) {
    return part.type === this.type;
  }

  checkCompatibility(part: IOConnectorPart) {
    if (!this.isCompatible(part)) {
      throw new Error("Incompatible connector parts");
    }
  }

  setName(name: string) {
    if (!name) {
      throw new Error("missing name");
    }
    this.name = name;
  }

  partOf(connector: IIOConnector) {
    if (!connector) {
      throw new Error("missing connector");
    }
    this.connector = connector;
    this.type = this.type || connector.type;
  }
}
