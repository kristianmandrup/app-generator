import { views } from "@appgenerator/views";
import { controllers } from "@appgenerator/controllers";
import { models } from "@appgenerator/models";

const $baseMap = {
  views,
  controllers,
};

export class BaseMapBuilder {
  constructor(public factoryRegistry: any) {}

  build(baseMap = {}) {
    const { factoryRegistry } = this;
    baseMap = {
      ...$baseMap,
      ...baseMap,
    };
    const baseMapNames = Object.keys(baseMap);
    baseMapNames.map((name) => {
      registry = baseMap[name];
      factoryRegistry[name] = registry;
    });
    return factoryRegistry;
  }
}
