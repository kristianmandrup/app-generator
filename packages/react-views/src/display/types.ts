export interface IItemDisplay {
  get displayItem(): any
  render(): any
  renderItem(): any
}

export interface IListDisplay {
  get displayItems(): any[]
  render(): any
  renderItems(): any
  renderContainer({renderChildren}): any
}