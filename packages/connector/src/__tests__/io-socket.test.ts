import { IOSocket } from "../io-socket";
import { IOPlug } from "../io-plug";

describe("IOSocket", () => {
  const socket = new IOSocket({ name: "s1" });

  describe("name", () => {
    it("sets name", () => {
      expect(socket.name).toBe(name);
    });
  });

  const plug = new IOPlug({ name: "p1" });

  describe("accept", () => {
    socket.accept(plug);

    it("sets plug on socket", () => {
      expect(socket.plug).toBe(plug);
    });

    it("sets socket on plug", () => {
      expect(plug.socket).toBe(socket);
    });
  });
});
