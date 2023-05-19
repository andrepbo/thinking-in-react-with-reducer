import { ProductProps } from "../interfaces/products.interfaces";
import {
  ProductActionTypes,
  ProductActions,
} from "../reducers/product.reducer";

interface RemoveProductProps {
  product: ProductProps;
  dispatch: React.Dispatch<ProductActions>;
}

const RemoveProduct = ({ product, dispatch }: RemoveProductProps) => {
  return (
    <td>
      <button
        onClick={() => {
          dispatch({ type: ProductActionTypes.DELETED, name: product.name });
        }}
      >
        Delete
      </button>
    </td>
  );
};

export default RemoveProduct;
