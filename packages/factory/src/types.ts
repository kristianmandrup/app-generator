export interface IFactory {
  build(schema?: Schema)
  register(registry: Registry, name?: string)
}
