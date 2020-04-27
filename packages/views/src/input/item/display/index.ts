
import { ItemDisplay } from '../../../item/display/index';

export class InputItemDisplay implements IItemDisplay {
  display: IItemDisplay

  get displayItem(): any {
    return this.display.displayItem
  }

  render(): any {
    return this.display.render
  }

  renderContainer({renderChildren}): any {
    return this.display.renderContainer({renderChildren})
  }

  renderItem(): any {
    return this.display.renderItem()
  }  
}