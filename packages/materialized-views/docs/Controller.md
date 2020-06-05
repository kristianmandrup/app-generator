# Controller

- `subscriberList` list of subscribers
- `data` current store data
- `store` the data store

## subscribeWith(subscriber, name)

Subscribe to controller with subscriber

## onEvent(event)

Trigger on incoming event from Materialized View. Updates store and notifies all subscribers

## updateStore(event)

Update store with incoming data event

## notifyAll

Notify all subscibers
