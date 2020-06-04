import { RxEventSubscriber, RxEventDispatcher } from "../event";
import { RxEventStream } from "../stream";

const createEvent = () => ({
  uuid: "1",
  name: "x",
  type: "create",
  data: {
    entity: "User",
  },
  timestamp: new Date(),
});

const createEventStream = (name: string) => new RxEventStream(name);
const createDispatcher = (name: string) => new RxEventDispatcher(name);
const createSubscriber = (name: string) => new RxEventSubscriber(name);

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
      const { latest, name } = dispatcher;
      expect(name).toBe("x");
      expect(latest.published).toBe(event);
    });

    it("subscriber notified and received event", () => {
      const { latest } = subscriber;
      expect(latest.data).toBe(event);
    });
  });
});
