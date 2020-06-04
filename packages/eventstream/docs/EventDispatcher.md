# EventDispatcher

Dispatches events to event stream

- `name`
- `list` list of events dispatched
- `latest` map of dispatched or ignored (non-dispatched) events
- `eventStream` to dispatch to

## setStream(eventStream)

Sets `eventStream` to dispatch to

## dispatch(event)

- Dispatches an event to event stream.
- Stores event in list of events dispatched
- Pushes event to event store
