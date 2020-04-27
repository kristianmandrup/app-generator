import { ItemDisplay } from '../../../item/display/index';

export class InputItemContainerDisplay implements IItemContainerDisplay {

  get classNames() {
    return []
  }

  renderItem(): any {
    return this.displayItem
  }

  get action() {
    return ""
  }

  get formName() {
    return [this.name, "form"].join("-")
  }

  render(): any {
    const { formName, action, classNames } = this
    return <form name={formName} action={action} className={classNames}>
      { return this.renderItem() }
    </form>
  }
}

export class InputItemDisplay extends BaseView {
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

