import { IIOConnector } from './io-connector';

export interface IIOConnectorPart {
  name: string
  connector: IIOConnector
}

export class IOConnectorPart {
  name: string
  connector: IIOConnector

  constructor({name, connector}: any) {
    this.setName(name)  
    this.partOf(connector)
  }

  setName(name: string) {
    if (!name) {
      throw new Error('missing name')        
    }
    this.name = name
  }

  partOf(connector: IIOConnector) {
    if (!connector) {
      throw new Error('missing connector')  
    }
    this.connector = connector
  }
}