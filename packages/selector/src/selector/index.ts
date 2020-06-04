import { ISelectQuery } from "./types";
import { IEventStream } from "@appgenerator/eventstream";
import { IOConnector } from "@appgenerator/connector";
import { IdentitySelectQuery } from "./query";

export * from "./types";

export class Selector {
  dataSourceConnector: IOConnector; // connect top data source
  stream?: IEventStream; // for notifying
  selectQuery: ISelectQuery;
  data: any;
  selectedData: any;

  constructor(selectQuery: ISelectQuery) {
    this.selectQuery = selectQuery || new IdentitySelectQuery();
  }

  setDataSourceConnector(dataSourceConnector: IOConnector) {
    this.dataSourceConnector = dataSourceConnector;
    return this;
  }

  setEventStream(stream: IEventStream) {
    this.stream = stream;
    return this;
  }

  setQuery(selectQuery) {
    this.selectQuery = selectQuery;
  }

  notify(data) {
    this.data = data;
    if (!this.stream) return;
    this.stream.dispatch(this.selectData());
  }

  selectData(): any {
    this.selectedData = this.selectQuery.run(this.data);
    return this.selectedData;
  }
}
