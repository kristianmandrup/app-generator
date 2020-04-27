import { BaseView } from '../../../base/index';

export interface IItemContainerDisplay {
  get classNames(): string[]
  renderItem(): any
  render(): any
}

export interface IItemDisplay {
  injectContainerDisplay(containerDisplay: IItemContainerDisplay)
  get displayItem(): any
  render(): any
}


export class ItemContainerDisplay {
  constructor() {
  }

  get classNames() {
    return []
  }

  renderItem(): any {
    return this.displayItem
  }

  render(): any {
    const { classNames } = this
    return <div className={classNames}>
      { return this.renderItem() }
    </div>
  }
}

export class ItemDisplay extends BaseView {
  containerDisplay: IListContainerDisplay

  injectContainerDisplay(containerDisplay: IListContainerDisplay) {
    containerDisplay.displayItem = displayItem
    this.containerDisplay = containerDisplay;
  }  

  get displayItem(): any {
    return {}
  }

  render(): any {
    return this.container.render()
  }
}