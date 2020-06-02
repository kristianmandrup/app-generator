# Registry

The registry contains:

- an entry map
- a map of nested registries

## name

The name of the registry

## path

The path of the registry (ie. name path from root registry)

Example: `entity.models.item`

## entryMap

The entry map can be used to store things such as:

- factories to be used to create instance
- instances created by factories

The reason for using an entry map is to allow either:

- different modes, such as development, production etc, each with a speicific key in the map
- different factory types such as for: instance, unit tester, E2E tester, mocks etc

## registryMap

Contains a map of nested registries.

## entryList

list of entries of `entryMap`

## registryList

list of registries of `registryMap`

## addEntry(entry, name)

Adds an `entry` to the `entryMap` by name

## addRegistry(registry, name)

Adds a `registry` to the `registryMap` by name

## ensureRegistryAtPath(path)

ensures there is a nested path of registries to the given path name.
It will create any registries required to create a full pathway.
Similar to `mkdir p` for file systems, that creates a deep folder structure.

## addEntryMap(entryMap)

If nested calls `addEntryMap` recursively.
If the entry has a `name` property, add it to the entry map.
Otherwise create and add a new `Registry` to the `registryMap`

## named(name)

Get a named entry from `entryMap`

## atPath(path)

Get a named registry from nested registries

## mapAtPath(path)

Get a registry by path and return `entryMap` for it

## registryNamed(name)

Get a registry by name from `registryMap`
