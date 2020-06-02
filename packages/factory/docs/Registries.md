# Registries

Contains nested map of default Factories used to build an App

```ts
const entity = {
  models: {
    display: {
      list: {},
      item: {},
    },
    input: {
      list: {},
      item: {},
    },
  },
  ui: {
    views: {
      display: {
        list: {},
        item: {},
      },
      input: {
        list: {},
        item: {},
      },
    },
    actions: {
      display: {
        list: {},
        item: {},
      },
      input: {
        list: {},
        item: {},
      },
    },
  },
  controllers: {
    display: {
      list: {},
      item: {},
    },
    input: {
      list: {},
      item: {},
    },
  },
  services: {
    list: {},
    item: {},
  },
  apis: {
    display: {
      list: {
        queries: {},
        mutators: {},
      },
      item: {
        queries: {},
        mutators: {},
      },
    },
    input: {
      list: {
        queries: {},
        mutators: {},
      },
      item: {
        queries: {},
        mutators: {},
      },
    },
  },
};

const registries = {
  entity: {
    actions,
    models,
    ui, // views, actions
    controllers,
    services,
    apis,
  },
  infra: {
    eventstreams: {},
    materializedViews: {},
    selectors: {},
  },
};
```
