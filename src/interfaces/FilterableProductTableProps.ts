export interface FilterableProductTableProps {
  products: {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  }[];
  filterText: string;
  inStockOnly: boolean;
}
