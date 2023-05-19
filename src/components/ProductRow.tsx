import { ProductActions } from "../reducers/product.reducer";
import RemoveProduct from "./RemoveProduct";

type ProductRowProps = {
  product: {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  };
  dispatch: React.Dispatch<ProductActions>;
};

const ProductRow = ({ product, dispatch }: ProductRowProps) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      <RemoveProduct product={product} dispatch={dispatch} />
    </tr>
  );
};

export default ProductRow;
