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

## add({ socketName, plugName })

Add a new socket and plug with given names. A plug with a given name will automatically notify the socket of the same name.

## addSocket(socket)

Add a socket

## addPlug(plug)

Add a plug

## connectNamed(from, to)

Connect a plug `from` with a socket `to`

## socketsAccepting(data)

Return list of sockets accepting particular data

## notifyAllSockets(data)

Notify all sockets accepting data with given `data`

## notifySockets(sockets, data)

Notify list of `sockets` with `data`
