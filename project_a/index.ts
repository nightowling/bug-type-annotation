import { types } from "mobx-state-tree";
export { types };

export const ModelA = types.model({
  a: types.optional(types.string, ""),
});

export const modelA = ModelA.create({
  a: "",
});
