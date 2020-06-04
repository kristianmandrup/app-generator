# EventStream

Manages streams of events and stores a history of all events on the stream.

## subscribe(subscriber)

Subscribes a `subscriber` to the event stream

## unsubscribe(subscriber)

Unsubscribes a `subscriber` from the event stream, either by reference or name

## named(name)

Gets a subscriber subscribed to this event stream by name

## dispatch(event)

Dispatches an event to the event stream. Subscribers to event should be notified so they can react.
