import { modelA, ModelA } from "bug-type-annotation-a";
import { types } from "mobx-state-tree";

export const ModelB = types.model({
  modelAs: types.array(ModelA),
});

export const modelB = ModelB.create({
  modelAs: [
    {
      a: "",
    },
  ],
});
