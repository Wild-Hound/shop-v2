import { productType } from "../Types/Types";

export const updateProducts = (data: productType[]) => {
  return {
    type: "updateProducts",
    payload: data,
  };
};
