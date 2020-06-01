import { Connectable } from "../connectable";
import { Publisher } from "../publisher";
import { Subscriber } from "../subscriber";

describe("Connectable", () => {
  const connectable = new Connectable("c");
  const publisher = new Publisher("p");
  const subscriber = new Subscriber("s");
  const data = "hello";

  beforeEach(() => {
    connectable.clear();
  });

  describe("injectPublisher", () => {
    connectable.injectPublisher(publisher);

    it("sets publisher", () => {
      expect(connectable.publisher).toBe(publisher);
    });
  });

  describe("subscribe", () => {
    connectable.subscribe(subscriber);
    it("publishes data", () => {
      expect(connectable.hasSubscriber(subscriber)).toBeTruthy();
    });
  });

  describe("publish", () => {
    connectable.injectPublisher(publisher);

    describe("no subcriber", () => {
      it("ignored", () => {
        expect(connectable.latest.ignored).toBe(data);
      });
    });

    describe("has subcriber", () => {
      connectable.subscribe(subscriber);
      it("publishes data", () => {
        connectable.publish(data);
        expect(connectable.latest.published).toBe(data);
      });
    });
  });
});
