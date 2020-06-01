import { Publisher } from "../publisher";
import { Subscriber } from "../subscriber";

describe("Publisher", () => {
  const publisher = new Publisher("p");
  const subscriber = new Subscriber("s");
  const data = "hello";

  beforeEach(() => {
    publisher.clear();
  });

  describe("subscribe", () => {
    publisher.subscribe(subscriber);
    it("publishes data", () => {
      expect(publisher.hasSubscriber(subscriber)).toBeTruthy();
    });
  });

  describe("publish", () => {
    publisher.publish(data);
    describe("no subcriber", () => {
      it("ignored", () => {
        expect(publisher.latest.ignored).toBe(data);
      });
    });

    describe("has subcriber", () => {
      publisher.subscribe(subscriber);
      it("publishes data", () => {
        publisher.publish(data);
        expect(publisher.latest.published).toBe(data);
      });
    });
  });
});
