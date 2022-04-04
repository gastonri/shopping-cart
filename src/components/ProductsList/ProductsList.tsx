import React from 'react';
import { Product } from 'interfaces/Products';
import { ProductItem } from './ProductItem';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

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
