import { ModelA, types } from "bug-type-annotation-a";

export const ModelB = types
  .model({
    modelAs: types.array(ModelA),
  })

  .actions((self) => ({
    hello: () => {
      self.modelAs.push(ModelA.create(/** DTO comes here */));
    },
  }));
