export interface IEvent {
  uuid: string;
  name: string;
  type: string;
  data: any;
  timestamp: any;
}

export interface IEventError extends IEvent {
  message: string;
  code: number
}