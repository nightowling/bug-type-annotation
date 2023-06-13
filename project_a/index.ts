import {
  Instance,
  IModelType,
  ModelPropertiesDeclarationToProperties,
  ModelPropertiesDeclaration,
} from "mobx-state-tree";
import { types } from "mobx-state-tree";
// import { types } from "mobx-state-tree/dist/types";

export { types };
export type {
  Instance,
  IModelType,
  ModelPropertiesDeclarationToProperties,
  ModelPropertiesDeclaration,
};
export type CorrectTypes = typeof types;
export const RealTypes: CorrectTypes = types;

export const ModelA = types.model({
  a: types.optional(types.string, ""),
});

export type IModelA = Instance<typeof ModelA>;

export const modelA = ModelA.create({
  a: "",
});
