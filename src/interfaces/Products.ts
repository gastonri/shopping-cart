export interface Product {
  class_name: string;
  full_description: string;
  headshot: string;
  id: number;
  instructor: string;
}

export interface CartProduct extends Product {
  amount: number;
}
