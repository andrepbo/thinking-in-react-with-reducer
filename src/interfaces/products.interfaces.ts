import { ProductActions } from "../reducers/product.reducer";

export interface ProductProps {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface FilterableProductTableProps {
  products: ProductProps[];
  dispatch: React.Dispatch<ProductActions>;
}
