import { BaseView } from '../../../base/index';

export class ItemDisplay extends BaseView {
  get displayItem(): any {
    return {}
  }

  render(): any {
    return this.renderContainer({renderItem: this.renderItem()})    
  }

  renderContainer({renderChildren}): any {
    return this.renderItem()
  }

  renderItem(): any {
    return this.displayItem.render()
  }
}