import { ProductProps } from "../interfaces/products.interfaces";

export enum ProductActionTypes {
  ADDED = "added",
  DELETED = "deleted",
}

export interface ProductActions {
  type: ProductActionTypes;
  name: string;
  stocked: boolean;
  price: string;
  category: string;
}

export const initialProducts = [
  { id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  {
    id: 2,
    category: "Fruits",
    price: "$1",
    stocked: true,
    name: "Dragonfruit",
  },
  {
    id: 3,
    category: "Fruits",
    price: "$2",
    stocked: false,
    name: "Passionfruit",
  },
  {
    id: 4,
    category: "Vegetables",
    price: "$2",
    stocked: true,
    name: "Spinach",
  },
  {
    id: 5,
    category: "Vegetables",
    price: "$4",
    stocked: false,
    name: "Pumpkin",
  },
  { id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export const productReducer = (
  state: ProductProps[],
  action: ProductActions
) => {
  switch (action.type) {
    case ProductActionTypes.ADDED: {
      if (action.name !== "") {
        return state.some((s) => s.name === action.name)
          ? state
          : [
              ...state,
              {
                name: action.name,
                price: action.price,
                category: action.category,
                stocked: action.stocked,
              },
            ];
      }

      return state;
    }
    case ProductActionTypes.DELETED: {
      return state.filter((product) => product.name !== action.name);
    }
    default: {
      throw Error("Unknow action: " + action.type);
    }
  }
};
