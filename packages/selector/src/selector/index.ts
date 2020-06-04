import { ISelectQuery } from "./types";
import { IMaterializedView } from "@appgenerator/materialized-views";

export * from "./types";

export class IdentitySelectQuery implements ISelectQuery {
  run(data: any): any {
    return data;
  }
}

export class Selector {
  selectQuery: ISelectQuery;
  data: any;
  views: {
    [key: string]: IView;
  } = {};

  constructor(selectQuery: ISelectQuery) {
    this.selectQuery = selectQuery || new IdentitySelectQuery();
  }

  setQuery(selectQuery) {
    this.selectQuery = selectQuery;
  }

  addViewTarget(view: IView, name?: string) {
    const $name = name || view.name;
    this.views[$name] = view;
  }

  removeViewTarget(view: IView, name?: string) {
    const $name = name || view.name;
    delete this.views[$name];
  }

  // injectMVListener(mvListener: IMVListener) {
  //   mvListener.injectNotifyTarget(this);
  //   this.mvListener = mvListener;
  // }

  injectMaterializedView(mv: IMaterializedView) {
    // const mvListener = new MVListener();
    // mvListener.listenTo(mVController);
    // this.injectMVListener(mvListener);
  }

  notify(data) {
    this.data = data;
  }

  get viewList() {
    return Object.values(this.views);
  }

  notifyViews(names: string[] = []) {
    this.viewList.map((view) => view.notify(this.data));
  }

  select(): any {
    // return this.selectQuery(this.data);
  }
}
