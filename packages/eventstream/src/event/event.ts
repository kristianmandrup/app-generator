export interface IEvent {
  name?: string;
  type: string;
}

export class Event {
  name?: string;
  type: string = "default";
}
