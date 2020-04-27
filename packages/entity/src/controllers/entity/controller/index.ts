import { IListController } from '../../../../../controllers/src/types';

export class EntityController {
  listController: IListController

  constructor(public name: string) {
  }
  
  inject(listController: IListController) {
    this.listController = listController
  }
}