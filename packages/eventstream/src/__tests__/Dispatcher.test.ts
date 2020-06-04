import { EventDispatcher } from "../event";

const createEvent = () => ({
  uuid: "1",
  name: "x",
  type: "create",
  data: {
    entity: "User",
  },
  timestamp: new Date(),
});

const create = (name: string) => new EventDispatcher(name);

describe("EventDispatcher", () => {
  const dispatcher = create("x");
  it("creates", () => {
    expect(dispatcher.name).toEqual("x");
  });

  describe("dispatch", () => {
    const dispatcher = create("x");
    it("does not dispatch", () => {
      const event = createEvent();
      dispatcher.dispatch(event);
      const { latest } = dispatcher;
      expect(latest.ignored).toBe(event);
      expect(latest.published).toBeUndefined();
    });
  });
});
