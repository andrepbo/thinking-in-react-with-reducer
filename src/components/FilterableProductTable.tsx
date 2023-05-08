import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { FilterableProductTableProps } from "../interfaces/FilterableProductTableProps";

const FilterableProductTable = ({ products }: FilterableProductTableProps) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
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
      />
    </div>
  );
};

export default FilterableProductTable;
