import React from 'react';
import { Product } from 'interfaces/Products';
import { ProductItem } from './ProductItem';

export const ProductsList = ({ products }: ProductsListInterface) => {
  return (
    <div>
      {React.Children.toArray(products.map(product => <ProductItem name={product.name} id={product.id} />))}
    </div>
  );
};

interface ProductsListInterface {
  products: Product[];
}
