# Factory

## AppFactory

`AppFactory` has a registry of factories, one factory for each type of entity that can be built for an app.

The application entities can be found in `registries.ts`. It is a nested structure, where each type of entity can be registered for a given path such as `entity.models.display.item`

```ts
export const registries = {
  entity,
  infra,
};
```
