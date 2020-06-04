import { IOConnector } from "../io-connector";

describe("Connectable", () => {
  const connector = new IOConnector("c1");
  const data = "hello";

  beforeEach(() => {
    connector.clear();
  });

  describe("onData", () => {
    connector.addSocket("a");
    const plug = connector.addPlug("a").latest.plug;
    plug.notify(data);

    it("notifies", () => {
      expect(connector.latest.data).toBe(data);
    });
  });

  describe("storeDataReceived", () => {
    connector.addSocket("a");
    const plug = connector.addPlug("a").latest.plug;
    plug.notify(data);

    it("notifies store with new data", () => {
      expect(connector.dataStore.latestHistory).toBe(data);
    });
  });

  describe("notifyError", () => {
    const socket = connector.addSocket("a").latest.socket;
    const plug = connector.addPlug("a").latest.plug;
    plug.notifyError(data);

    it("notifies", () => {
      expect(connector.latest.error).toBe(data);
    });
  });

  describe("notifyAcceptingSockets", () => {
    const socket = connector.addSocket("a").latest.socket;
    const plug = connector.addPlug("a").latest.plug;
    connector.notifyAcceptingSockets(data);

    it("notifies", () => {
      expect(socket.latest.data).toBe(data);
    });
  });

  describe("add", () => {
    const socket = "a";
    const plug = "a";
    connector.add({ socket, plug });

    it("adds socket", () => {
      expect(connector.socketNamed("a")).toBe(socket);
    });

    it("adds plug", () => {
      expect(connector.plugNamed("a")).toBe(plug);
    });
  });

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
