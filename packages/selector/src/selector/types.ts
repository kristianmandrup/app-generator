export interface ISelectQuery {
  run(data: any): any;
}

export interface ISelector {
  notify(data);
  select(): any;
}
