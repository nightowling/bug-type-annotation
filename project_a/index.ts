import { types } from "mobx-state-tree";

export const ModelA = types.model({
  a: types.optional(types.string, ""),
});
