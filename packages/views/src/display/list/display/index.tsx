
export interface IListContainerDisplay {

}

export class ListContainerDisplay {
  constructor({renderChildren}) {
    this.renderChildren = renderChildren
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
    return {
      classNames,
      items: this.renderItems() 
    }
  }
}

export class ListDisplay extends BaseView {
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