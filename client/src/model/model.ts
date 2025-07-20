export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export type Products = {
  products: Product[];
};
