const display = () => ({
  list: {},
  item: {},
});

const input = display;

const create = () => ({
  display: display(),
  input: input(),
});

const models = create();

const ui = {
  views: create(),
  actions: create(),
};

const controllers = create();

const services = input();

const api = () => ({
  queries: {},
  mutators: {},
});

const apiMap = () => ({
  list: api(),
  item: api(),
});

const apis = {
  display: apiMap(),
  input: apiMap(),
};

const actions: any[] = [];

const entity = {
  actions,
  models,
  ui, // views, actions
  controllers,
  services,
  apis,
};

const infra = {
  eventstreams: {},
  materializedViews: {},
  selectors: {},
};

export const registries = {
  entity,
  infra,
};
