import { useReducer } from "react";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";
import { initialProducts, productReducer } from "./reducers/product.reducer";

const App = () => {
  const [products, dispatch] = useReducer(productReducer, initialProducts);
  return <FilterableProductTable products={products} dispatch={dispatch} />;
};

export default App;
