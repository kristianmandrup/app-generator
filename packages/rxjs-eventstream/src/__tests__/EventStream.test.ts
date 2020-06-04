import { EventStream } from "../";
import { EventSubscriber } from "../event";

describe("EventStream", () => {
  const name = "x";
  const eventStream = new EventStream(name);

  it("is named", () => {
    expect(eventStream.name).toEqual(name);
  });

  it("has no subscribers", () => {
    expect(eventStream.allSubscribers).toEqual([]);
    expect(eventStream.hasSubscribers).toBeFalsy();
  });

  describe("init", () => {
    it("does not subscribe subject since no subscribers", () => {
      expect(eventStream.subject).toBeUndefined();
    });
  });

  describe("subscribe", () => {
    const topic = "a";
    let subscriber;
    let eventStream;

    beforeEach(() => {
      eventStream = new EventStream("x");
      subscriber = new EventSubscriber(topic);
      eventStream.subscribe(subscriber);
    });

    it("adds subscriber to subscribers", () => {
      expect(eventStream.subscriberList).toEqual([subscriber]);
      expect(eventStream.hasSubscribers).toBeTruthy();
      expect(eventStream.hasSubscribersFor(topic)).toBeTruthy();
      expect(eventStream.hasSubscribersFor("unknown")).toBeFalsy();
    });

    describe("publish", () => {
      const event = {
        text: "hello",
      };
      eventStream.publish(event);
      it("calls onNext on subscriber", () => {
        expect(subscriber.latest.data).toEqual(event);
      });
    });

    describe("error", () => {
      const errorEvent = {
        name: "a",
        msg: "error",
      };
      eventStream.error(errorEvent);

      it("calls onError on matching subscriber", () => {
        expect(subscriber.latest.error).toEqual(errorEvent);
      });
    });

    describe("unsubscribe", () => {
      eventStream.unsubscribe(topic, subscriber);

      it("removes subscriber from subscribers", () => {
        expect(eventStream.subscriberList).toEqual([]);
        expect(eventStream.hasSubscribers).toBeFalsy();
      });
    });

    describe("unsubscribeAllFor", () => {
      eventStream.unsubscribeAllFor(topic);

      it("removes subscriber from subscribers", () => {
        expect(eventStream.subscriberList).toEqual([]);
        expect(eventStream.hasSubscribers).toBeFalsy();
      });
    });

    describe("unsubscribeAll", () => {
      eventStream.unsubscribeAllFor(topic);

      it("removes subscriber from subscribers", () => {
        expect(eventStream.subscriberList).toEqual([]);
        expect(eventStream.hasSubscribers).toBeFalsy();
      });
    });
  });
});
