export interface IItemContainerDisplay {
  classNames: string[];
  renderValue(): any;
  render(): any;
}

export interface IItemDisplay {
  injectContainerDisplay(containerDisplay: IItemContainerDisplay);
  valueToDisplay: any;
  render(): any;
}

export interface IListContainerDisplay {
  classNames: string[];
  renderItem(): any;
  render(): any;
}

export interface IListDisplay {
  injectContainerDisplay(containerDisplay: IListContainerDisplay);
  displayItem: any;
  render(): any;
}
