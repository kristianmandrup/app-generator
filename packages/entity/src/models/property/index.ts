import { IItemModel } from '../../../../../models/src/types';

export class EntityModel {
  itemModel: IItemModel

  constructor(public name: string) {
  }
  
  inject(itemModel: IItemModel) {
    this.itemModel = itemModel
  }
}