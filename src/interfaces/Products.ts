export interface Product {
  id: number;
  name: string;
}

export interface CartProduct extends Product {
  amount: number;
}
