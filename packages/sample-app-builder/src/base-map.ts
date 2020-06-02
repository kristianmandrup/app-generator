import { views, actions } from "@appgenerator/react-views";
import { controllers } from "@appgenerator/controllers";
import { models } from "@appgenerator/models";

export const applicationMap = {
  entity: {
    controllers,
    models,
    ui: {
      views,
      actions,
    },
  },
};
