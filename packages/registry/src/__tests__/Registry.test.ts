import { Registry } from "../Registry";

describe("Registry", () => {
  const name = "a";
  const registry = new Registry(name);

  it("creates named", () => {
    expect(registry.name).toEqual(name);
  });

  describe("register b", () => {
    const b = new Registry("b");
    registry.register(b);

    it("has registry named b", () => {
      expect(registry.named("b")).toEqual(b);
    });

    describe("build", () => {
      const built = b.build();

      it("builds instance", () => {
        expect(built).toEqual({});
      });
    });
  });
});
