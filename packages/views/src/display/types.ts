export interface IItemContainerDisplay {
  get classNames(): string[]
  renderValue(): any
  render(): any
}

export interface IItemDisplay {
  injectContainerDisplay(containerDisplay: IItemContainerDisplay)
  get valueToDisplay(): any
  render(): any
}

export interface IListContainerDisplay {
  get classNames(): string[]
  renderItem(): any
  render(): any
}

export interface IListDisplay {
  injectContainerDisplay(containerDisplay: IListContainerDisplay)
  get displayItem(): any
  render(): any
}
