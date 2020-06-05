import { IItemModel } from "@appgenerator/models";

export class PropertyModel {
  itemModel?: IItemModel;

  constructor(public name: string) {}

  inject(itemModel: IItemModel) {
    this.itemModel = itemModel;
  }
}
