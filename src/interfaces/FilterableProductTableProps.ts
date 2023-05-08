export interface IFilterableProductTableProps {
  products: {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  }[];
}
