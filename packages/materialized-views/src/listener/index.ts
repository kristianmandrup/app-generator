export class MVListener {
  notifyTarget: INotifyTarget

  constructor({materializedView}: {materializedView: IMaterializedView}) {
    this.listenTo(materializedView)
  }

  injectNotifyTarget(notifyTarget: INotifyTarget) {
    this.notifyTarget = notifyTarget
  }

  // TODO: generalize
  listenTo(materializedView: IMaterializedView, name?: string) {
    if (!materializedView) return
    materializedView.addListener(this, name)
  }

  notify(data: any): any {
    this.notifyTarget.notify(data);    
  }
}
