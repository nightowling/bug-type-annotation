import {
  modelA,
  ModelA,
  RealTypes,
  IModelA,
  IModelType,
  // ModelPropertiesDeclarationToProperties,
  // ModelPropertiesDeclaration,
} from "bug-type-annotation-a";
// import { types } from "mobx-state-tree/dist/types";
import { Instance, types } from "bug-type-annotation-a";
import {
  IAnyType,
  IArrayType,
  ModelPrimitive,
  ModelPropertiesDeclaration,
  ModelPropertiesDeclarationToProperties,
} from "mobx-state-tree";

// type fixed = IModelType<
//   {
//     modelAs: IModelA;
//   },
//   any
// >;

export interface MyModelType extends ModelPropertiesDeclaration {
  modelAs: IArrayType<typeof ModelA>;
}

const modelInput: MyModelType = {
  modelAs: types.array(ModelA),
};
type TypeForModelB = IModelType<
  ModelPropertiesDeclarationToProperties<MyModelType>,
  {}
>;
export const ModelB: TypeForModelB = types.model<typeof modelInput>(modelInput);

type IModelB = Instance<typeof ModelB>;

export const modelB: IModelB = ModelB.create({
  modelAs: [
    {
      a: "",
    },
  ],
});
