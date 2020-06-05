import { IListModel } from "@appgenerator/models";

export interface IEntityModel {}

export class EntityModel {
  listModel?: IListModel;

  constructor(public name: string) {}

  inject(itemModel: IListModel) {
    this.listModel = itemModel;
  }
}
