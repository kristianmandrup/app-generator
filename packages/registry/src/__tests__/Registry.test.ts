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

  it("has empty factoryList", () => {
    expect(registry.entryList).toEqual([]);
  });

  it("has empty registryList", () => {
    expect(registry.registryList).toEqual([]);
  });

  describe("addRegistry", () => {
    describe("b", () => {
      const b = new Registry("b");
      const bMap = {
        y: 1,
      };
      b.addEntryMap(bMap);

      registry.addRegistry(b);

      it("has registry named b", () => {
        expect(registry.registryNamed("b")).toEqual(b);
      });

      it("is in registryList", () => {
        expect(registry.registryList).toEqual([b]);
      });

      it("mapAtPath b", () => {
        expect(registry.mapAtPath["b"]).toEqual(bMap);
      });

      describe("c under b", () => {
        const c = new Registry("c");
        const cMap = {
          x: 2,
        };
        c.addEntryMap(cMap);
        b.addRegistry(c);

        it("mapAtPath b.c", () => {
          expect(registry.mapAtPath["b.c"]).toEqual(cMap);
        });
      });
    });
  });

  describe("ensureRegistryAtPath", () => {
    const path = "x.y";
    const matchingRegistry = registry.ensureRegistryAtPath(path);
    it("has matching path", () => {
      expect(matchingRegistry.path).toEqual(path);
    });
  });

  describe("addEntry", () => {
    const name = "f";
    const f = {};
    registry.addEntry(f);

    it("is in entryList", () => {
      expect(registry.entryList).toEqual([f]);
    });

    it("has entry named f", () => {
      expect(registry.named(name)).toEqual(name);
    });
  });
});
