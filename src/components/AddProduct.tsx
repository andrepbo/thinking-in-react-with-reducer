import { Dispatch, useState } from "react";
import {
  ProductActionTypes,
  ProductActions,
} from "../reducers/product.reducer";

interface AddProductProps {
  dispatch: Dispatch<ProductActions>;
}

const AddProduct = ({ dispatch }: AddProductProps) => {
  const initialValues = {
    name: "",
    inStockOnly: false,
    price: "",
    category: "Vegetables",
  };
  const [values, setValues] = useState(initialValues);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="Add vegetable name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <input
        placeholder="Price"
        value={values.price}
        onChange={(e) => setValues({ ...values, price: e.target.value })}
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={values.inStockOnly}
          onChange={(e) =>
            setValues({ ...values, inStockOnly: e.target.checked })
          }
        />{" "}
        in stock
      </label>
      <br />
      <button
        onClick={() => {
          setValues(initialValues);
          dispatch({
            type: ProductActionTypes.ADDED,
            name: values.name,
            stocked: values.inStockOnly,
            price: values.price,
            category: values.category,
          });
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddProduct;
