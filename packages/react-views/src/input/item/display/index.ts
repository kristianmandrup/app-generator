import { ItemDisplay } from '../../../item/display/index';

export class InputItemContainerDisplay implements IItemContainerDisplay {

  get classNames() {
    return []
  }

  onChange = (e: any) => {
    const { name, value } = e.target
    this.dispatchInputValue({name, value})
  }

  renderItem(): any {
    const { displayValue } = this
    return <input type="text" value={this.displayValue} onChange={onChange}/>
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
    containerDisplay.displayValue = displayValue
    this.containerDisplay = containerDisplay;
  }  

  get displayValue(): any {
    return {}
  }

  render(): any {
    return this.container.render()
  }
}

