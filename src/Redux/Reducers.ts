import { productType } from "../Types/Types";

export const Products = (
  state = [],
  action: { type: string; payload: productType[] }
) => {
  switch (action.type) {
    case "updateProducts":
      return action.payload;
    default:
      return state;
  }
};
