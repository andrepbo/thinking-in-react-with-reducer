import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { FilterableProductTableProps } from "../interfaces/products.interfaces";
import AddProduct from "./AddProduct";

const FilterableProductTable = ({
  products,
  dispatch,
}: FilterableProductTableProps) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <AddProduct dispatch={dispatch} />
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
        dispatch={dispatch}
      />
    </div>
  );
};

export default FilterableProductTable;
