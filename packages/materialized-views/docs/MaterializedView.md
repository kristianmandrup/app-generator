# MaterializedView

When connected to a `Connector`, the Materialized View should inject an `mv:[name]` plug and `mv:[name]` socket. The socket is then connected back to the Materialized View via `socket.injectNotifyTarget`

## notify(data)

Receives `data` from the socket of the connector

## notifyError(data)

Receives `error` from the socket of the connector

## onUpdated(mvData: any)

Triggered on any materialized view update and notifies `plug` on connector with latest data

## update(data)

Updates the materialized view with incoming data
