export interface IEvent {
  name: string;
  type: string;
  data: any;
}

export class Event {
  name: string = "no name";
  type: string = "default";
  data: any = {};
}

export interface IEventError {
  name: string;
  type: string;
  message: string;
  data: any;
}

export class EventEvent {
  name: string = "no name";
  type: string = "default";
  message: string = "";
  data: any = {};
}
