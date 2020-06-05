import { IIOConnector } from "./types";

export const connectTo = (
  target: any,
  connector: IIOConnector,
  prefix: string = ":"
) => {
  connector.addPair(prefix + target.name);
  const { latest } = connector;
  target.conn = {
    ...latest,
  };
  const { socket } = latest || {};

  socket && socket.injectNotifyTarget(target);
  target.connector = connector;
  return target;
};
