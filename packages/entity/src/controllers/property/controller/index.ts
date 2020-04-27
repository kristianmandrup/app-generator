import { IItemController } from '../../../../../controllers/src/types';

export class PropertyController {
  itemController: IItemController

  constructor(public name: string) {
  }
  
  inject(itemController: IItemController) {
    this.itemController = IItemController
  }
}