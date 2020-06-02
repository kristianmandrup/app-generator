import { Connectable } from "../connectable";
import { Publisher } from "../publisher";
import { IOConnector } from "../io-connector";
import { Subscriber } from "../subscriber";

describe("Connectable", () => {
  const connector = new IOConnector("c1");
  const publisher = new Publisher("p1");
  const subscriber = new Subscriber("s1");
  const data = "hello";

  beforeEach(() => {
    connector.clear();
  });

  describe("subscribe", () => {
    connector.subscribe(subscriber);

    it("has subscriber", () => {
      expect(connector.hasSubscriber(subscriber)).toBeTruthy();
    });
  });

  describe("notify", () => {
    connector.subscribe(subscriber);
    connector.notify(data);

    // this.storeNotifyData(data);
    // this.notifySockets(data);

    it("notifies", () => {
      // expect(subscriber.latest.received).toBe(data)
    });
  });

  describe("publish", () => {
    connector.subscribe(subscriber);
    connector.publish(data);

    // this.storeNotifyData(data);
    // this.notifySockets(data);

    it("notifies", () => {
      // expect(subscriber.latest.received).toBe(data)
    });
  });

  describe("storeNotifyData", () => {
    connector.subscribe(subscriber);
    connector.storeNotifyData(data);

    // this.storeNotifyData(data);
    // this.notifySockets(data);

    it("notifies store with new data", () => {
      // expect(subscriber.latest.received).toBe(data)
    });
  });

  describe("notifySockets", () => {
    connector.subscribe(subscriber);
    connector.add({ socketName: "s1", plugName: "p1" });
    connector.notifySockets(data);

    // this.storeNotifyData(data);
    // this.notifySockets(data);

    it("notifies", () => {
      // expect(subscriber.latest.received).toBe(data)
      // expect(connector.socketNamed("s1").received).toBe(data)
    });
  });

  describe("notifyError", () => {
    connector.subscribe(subscriber);
    connector.notifyError(data);

    // this.storeNotifyData(data);
    // this.notifySockets(data);

    it("notifies", () => {
      // expect(subscriber.latest.received).toBe(data)
    });
  });

  describe("notifySockets", () => {
    connector.subscribe(subscriber);
    const sockets = [];
    connector.notifyAll(sockets, data);

    // this.storeNotifyData(data);
    // this.notifySockets(data);

    it("notifies", () => {
      // expect(subscriber.latest.received).toBe(data)
    });
  });

  describe("socketsAccepting", () => {
    connector.subscribe(subscriber);
    const sockets = [];
    connector.socketsAccepting(data);

    // this.storeNotifyData(data);
    // this.notifySockets(data);

    it("accepts", () => {
      // expect(subscriber.latest.received).toBe(data)
    });
  });

  // add({ socketName, plugName }

  // addSocket(socket: IOSocket)

  // addPlug(plug: IOPlug)

  // createSocket(name: string)

  // createPlug(name: string)

  // connectNamed(from: string, to: string)

  // connect(socket: IIOSocket, plug: IIOPlug)

  // plugNamed(name: string)

  // socketNamed(name: string)

  // get socketNames(): string[]

  // get sockets(): IIOSocket[]

  // get plugNames(): string[]

  // get plugs(): IIOPlug[]
});
