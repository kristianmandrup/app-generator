import { ItemModel } from "..";

describe("ItemModel", () => {
  const entity = "Person";
  const list = new ItemModel(entity);
  it("test", () => {
    expect(list.entity).toEqual(entity);
  });
});
