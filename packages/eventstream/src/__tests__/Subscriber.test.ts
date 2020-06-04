import { EventSubscriber, EventDispatcher } from "../event";
import { EventStream } from "../stream";

const createEvent = () => ({
  uuid: "1",
  name: "x",
  type: "create",
  data: {
    entity: "User",
  },
  timestamp: new Date(),
});

const createEventStream = (name: string) => new EventStream(name);
const createDispatcher = (name: string) => new EventDispatcher(name);
const createSubscriber = (name: string) => new EventSubscriber(name);

describe("EventSubscriber", () => {
  const dispatcher = createDispatcher("x");

  describe("dispatch", () => {
    let subscriber;
    let eventStream;
    let dispatcher;
    let event;
    beforeEach(() => {
      subscriber = createSubscriber("a");
      eventStream = createEventStream("e");
      dispatcher = createDispatcher("x");
      dispatcher.setStream(eventStream);
      subscriber.subscribeTo(eventStream);
      event = createEvent();
      dispatcher.dispatch(event);
    });

    it("dispatches to eventStream", () => {
      const { latest } = dispatcher;
      expect(latest.published).toBe(event);
    });

    it("subscriber notified and received event", () => {
      const { latest } = subscriber;
      expect(latest.data).toBe(event);
    });
  });
});
