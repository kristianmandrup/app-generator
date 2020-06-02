import { Builder } from "../factory";

describe("Builder", () => {
  const name = "app";
  const builder = new Builder(name);
  const schema = {
    User: {
      name: "user",
    },
  };
  const EntityModel = class {
    constructor(public name: string) {}
  };

  const createEntityModel = (schemaEntity) => {
    return new EntityModel(schemaEntity.name);
  };

  const factories = {
    models: {
      entity: createEntityModel,
    },
  };

  it("creates named builder", () => {
    expect(builder.name).toEqual(name);
  });

  describe("buildNamed", () => {
    builder.setFactories(factories).setSchema(schema);
    const models: any = builder.buildNamed("model");
    expect(models.user.name).toEqual("User");
  });
});
