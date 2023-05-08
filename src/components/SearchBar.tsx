import { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: Dispatch<SetStateAction<string>>;
  onInStockOnlyChange: Dispatch<SetStateAction<boolean>>;
};

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) => {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
