export class ListContainerDisplay {
  constructor() {
  }

  get classNames() {
    return []
  }

  renderItems(): any {
    return this.displayItems.map(item => {
      return item.render()
    })
  }

  render(): any {
    const { classNames } = this
    return <div className={classNames}>
      { return this.renderItems() }
    </div>
  }
}

export class ListDisplay extends BaseView {
  containerDisplay: IListContainerDisplay

  injectContainerDisplay(containerDisplay: IListContainerDisplay) {
    containerDisplay.displayItems = displayItems
    this.containerDisplay = containerDisplay;
  }  

  get displayItems(): any[] {
    return []
  }

  render(): any {
    return this.container.render()    
  }
}