import { INotifyTarget, ISelectQuery } from '../types';
import { MVListener } from '../listener/index';

export class IdentitySelectQuery implements ISelectQuery {
  run(data: any): any {
    return daya
  }
}

export class Selector implements INotifyTarget {
  data: any

  constructor(selectQuery: ISelectQuery) {
    this.selectQuery = selectQuery || new IdentitySelectQuery()
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

  select(): any {
    return this.selectQuery(this.data)
  }
}