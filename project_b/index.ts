import { types } from "bug-type-annotation-a";

export const ABC = types.model({
  activeUserId: types.maybe(types.string),
});

export const abc = ABC.create({
  activeUserId: "",
});
