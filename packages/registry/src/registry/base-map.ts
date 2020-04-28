import { views } from '../../../views/src';
import { controllers } from '../../../controllers/src/index';
import { models } from '../../../models/src/index';

const $baseMap = {
  views, 
  controllers
}

export class BaseMapBuilder {
  constructor(public factoryRegistry: any){
  }

  build(baseMap = {}) {
    const { factoryRegistry } = this
    baseMap = {
      ...$baseMap,
      ...baseMap,
    }
    const baseMapNames = Object.keys(baseMap)
    baseMapNames.map(name => {
      registry = baseMap[name]
      factoryRegistry[name] = registry
    })    
    return factoryRegistry
  }
}





