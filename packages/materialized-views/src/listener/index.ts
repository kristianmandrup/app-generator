export class MVListener {
  notifyTarget: INotifyTarget

  constructor({mvController}: {mvController: IMVController}) {
    this.listenTo(mvController)
  }

  injectNotifyTarget(notifyTarget: INotifyTarget) {
    this.notifyTarget = notifyTarget
  }

  // TODO: generalize
  listenTo(mvController: IMVController, name?: string) {
    if (!mvController) return
    materializedView.addListener(this, name)
  }

  notify(data: any): any {
    this.notifyTarget.notify(data);    
  }
}
