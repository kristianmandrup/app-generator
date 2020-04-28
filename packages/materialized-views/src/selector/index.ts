import { INotifyTarget, ISelectQuery } from '../types';
import { MVListener } from '../listener/index';

export class IdentitySelectQuery implements ISelectQuery {
  run(data: any): any {
    return daya
  }
}

export class Selector implements INotifyTarget {
  data: any
  views = {}

  constructor(selectQuery: ISelectQuery) {
    this.selectQuery = selectQuery || new IdentitySelectQuery()
  }

  addViewTarget(view: IView, name?: string) {
    name = name || view.name
    this.views[name] = view
  }

  removeViewTarget(view: IView, name?: string) {  
    name = name || view.name
    delete this.views[name]
  }

  injectMVListener(mvListener: IMVListener) {
    mvListener.injectNotifyTarget(this)
    this.mvListener = mvListener
  }

  injectMaterializedView(materializedView: IMaterializedView) {
    const mvListener = new MVListener()
    mvListener.listenTo(materializedView)
    this.injectMVListener(mvListener)
  }

  notify(data) {
    this.data = data
  }

  get viewList() {
    return Object.values(this.views)
  }

  notifyViews(names?: string[] = []) {
    this.viewList.map(view => view.notify(this.data))
  }

  select(): any {
    return this.selectQuery(this.data)
  }
}