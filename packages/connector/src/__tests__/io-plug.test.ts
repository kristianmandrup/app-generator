import { IOSocket } from "../io-socket";
import { IOPlug } from "../io-plug";

describe("IOPlug", () => {
  const socket = new IOSocket({ name: "s1" });
  const plug = new IOPlug({ name: "p1" });

  describe("name", () => {
    it("sets name", () => {
      expect(plug.name).toBe(name);
    });
  });

  describe("plugInto", () => {
    plug.plugInto(socket);

    it("sets plug on socket", () => {
      expect(socket.plug).toBe(plug);
    });

    it("sets socket on plug", () => {
      expect(plug.socket).toBe(socket);
    });
  });
});
