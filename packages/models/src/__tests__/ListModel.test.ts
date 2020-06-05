import { ListModel } from "../";

describe("ListModel", () => {
  const entity = "Person";
  const list = new ListModel(entity);
  it("test", () => {
    expect(list.entity).toEqual(entity);
  });
});
