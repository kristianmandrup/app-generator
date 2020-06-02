import { Registry } from "../Registry";
import { Factory } from "../../../factory/src/factory";
import { Schema } from "../../../factory/src/schema";

describe("Registry", () => {
  const name = "a";
  const registry = new Registry(name);
  const schema = new Schema({
    User: {},
  });

  it("creates named", () => {
    expect(registry.name).toEqual(name);
  });

  describe("addRegistry", () => {
    const b = new Registry("b");
    registry.addRegistry(b);

    it("has registry named b", () => {
      expect(registry.registryNamed("b")).toEqual(b);
    });

    describe("build", () => {
      const built = b.build();
      const expected = {};

      it("builds instance", () => {
        expect(built).toEqual(expected);
      });
    });
  });

  describe("addFactory", () => {
    const name = "f";
    const f = new Factory(name, schema);
    registry.addFactory(f);

    it("has factory named f", () => {
      expect(registry.factoryNamed(name)).toEqual(name);
    });

    // describe("build", () => {
    //   const built = f.build();
    //   const expected = {};

    //   it("builds instance", () => {
    //     expect(built).toEqual(expected);
    //   });
    // });
  });
});
