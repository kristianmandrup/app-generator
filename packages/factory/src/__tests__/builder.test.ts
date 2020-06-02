import { Builder } from "../factory";
import { Registry } from "../../../registry/src/Registry";

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

  describe("build", () => {
    builder.setSchema(schema);
    const built = builder.build();
    const expected = {};
    it("was built", () => {
      expect(built).toEqual(expected);
    });
  });

  describe("buildAll", () => {
    builder.setSchema(schema);
    const built = builder.buildAll();
    const expected = {};
    it("was built", () => {
      expect(built).toEqual(expected);
    });
  });

  describe("rootBuild", () => {
    builder.setSchema(schema);
    const built = builder.rootBuild();
    const expected = {};
    it("was built", () => {
      expect(built).toEqual(expected);
    });
  });

  describe("registryBuild", () => {
    builder.setSchema(schema);
    const models = new Registry("models");
    models.addEntryMap({
      dev: createEntityModel,
    });
    const built = builder.registryBuild(models);
    const expected = {};
    it("was built", () => {
      expect(built).toEqual(expected);
    });
  });

  describe("registryMapBuild", () => {
    builder.setSchema(schema);
    const models = new Registry("models");
    models.addEntryMap({
      dev: createEntityModel,
    });
    const registryMap = {
      models,
    };
    const built = builder.registryMapBuild(registryMap);
    const expected = {};
    it("was built", () => {
      expect(built).toEqual(expected);
    });
  });

  describe("buildNamed", () => {
    builder.setFactories(factories).setSchema(schema);
    const models: any = builder.buildNamed("model");
    expect(models.user.name).toEqual("User");
  });
});
