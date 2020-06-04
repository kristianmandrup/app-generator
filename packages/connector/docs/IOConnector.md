# IOConnector

- `plugMap` plug into data sources (other connectors)
- `socketMap` (allow other connectors to listen and be notified)

## onData(data)

Callback activated when connector receives data.
Should notify relevant `sockets` with `data`

## storeDataReceived(data)

Store `data` received by `onData` for history

## onError(error)

Callback activated when connector receives an `error`.
Should notify relevant `sockets` with `error`

## storeErrorReceived(data)

Store `error` received by `onError` for history

## add({ socketName, plugName }, autoConnect)

Add a new socket and plug with given names. The plug and socket can be auto connected by passing `true` for `autoConnect`.

## addPair(name, autoConnect)

Adds a new socket and plug pair with the same name.

## addSocket(socket)

Add a socket either by instance or name

## addPlug(plug)

Add a plug either by instance or name

## connectNamed(from, to)

Connect a plug `from` with a socket `to`

## connectLatest

Connect latest `plug` and `socket` added

## connect(socket, plug)

Connect a `socket` and `plug` by instance

## socketsAccepting(data)

Return list of sockets accepting particular data

## notifyAllSockets(data)

Notify all sockets accepting data with given `data`

## notifySockets(sockets, data)

Notify list of `sockets` with `data`
