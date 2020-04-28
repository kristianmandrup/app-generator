import { IEntityView } from '../views/entity';
import { IEntityController } from '../controllers/entity/controller';
import { IEntityModel } from '../models/entity';

export class DisplayEntity {
  view: IEntityView
  controller: IEntityController
  model: IEntityModel
}