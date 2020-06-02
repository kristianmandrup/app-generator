# Builder

The builder takes a `schema` and builds application artifacts accordingly using registered factories in the `factories` registry.

The built application artifacts are registered in the `built` registry

## build(schema)

Sets schema and builds instances using schema entities and registered factories on builder

## buildAll

Builds using all entities of schema

## rootBuild

Builds using root registry and all schema entities

## registryBuild(registry)

Builds artifacts from a single registry, using entryMap of factories
for the registry

## registryMapBuild(registryMap)

Builds map of artifacts from a map of registries.
Each registry may contain factories and nested registries

## entryMapBuild(entryMap)

Builds map of artifacts from an entry map of factories.
Calls `buildNamed` for each

## buildNamed

Takes a `path` used to lookup a factory in the factories map.
If found, this factory is used to build one or more application artifacts. Each artifact is registered in `built` registry under the same path.

```ts
buildNamed(`models.entity`);
```

```ts
factories = {
  models: {
    entity: ModelEntityFactory;
  },
  //...
}
```

Finds `ModelEntityFactory`

iterates schema entities and builds a model entity instance for each using `ModelEntityFactory`, each of which are registered in `built`

```ts
schema = {
  User: {
    // ...
  },
  Person: {
    // ...
  },
};
```

Iterate: `[User, Person, ...]` schema entities

Return list of BuildMaps containing:

- `instance` (such as `userEntityModel, productEntityModel, ...`)
- `registry` to register instance
- `path`
- `entity` used to build (from `schema`)

## registerBuilt({registry, instance, entity, path})

Register built instances in `built` registry

```ts
built = {
  models: {
    entity: {
      User: userEntityModel,
      Product: productEntityModel,
      // ...
    },
  },
  //...
};
```
