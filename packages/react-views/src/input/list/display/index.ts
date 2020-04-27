import { BaseView } from '../../../base/index';
import { IListDisplay } from '../../../display/types';

export class InputListDisplay implements IListDisplay {
  display: IListDisplay

  get displayItems(): any {
    return this.display.displayItems
  }

  render(): any {
    return this.display.render
  }

  renderContainer({renderChildren}): any {
    return this.display.renderContainer({renderChildren})
  }

  renderItems(): any {
    return this.display.renderItems()
  }   
}