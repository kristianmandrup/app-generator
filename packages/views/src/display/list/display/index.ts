export class ListDisplay extends BaseView {
  get displayItems(): any[] {
    return []
  }

  render(): any {
    return this.renderContainer({renderChildren: this.renderItems()})    
  }

  renderContainer({renderChildren}): any {
    return this.renderChildren()
  }

  renderItems(): any {
    return this.displayItems.map(item => {
      return item.render()
    })
  }
}