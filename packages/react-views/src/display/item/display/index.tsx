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

  onClick = (e: any) => {
  }

  renderItem(): any {
    const { displayValue } = this
    return <span class={classNames} onClick={onClick}>{this.displayItem}</span>
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
    containerDisplay.displayValue = displayValue
    this.containerDisplay = containerDisplay;
  }  

  get displayValue(): any {
    return "none"
  }

  render(): any {
    return this.container.render()
  }
}