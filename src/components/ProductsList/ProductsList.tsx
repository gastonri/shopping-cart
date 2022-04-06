import { CartContext } from 'contexts/CartContext';
import useTranslation from 'hooks/useTranslation';
import { Product } from 'interfaces/Products';
import React, { useContext } from 'react';

import './ProductList.scss';

export const ProductsList = ({ products }: ProductsListInterface) => {
  const t = useTranslation();
  const { addProduct } = useContext(CartContext);

  return (
    <div className="productList">
      {React.Children.toArray(
        products.map((product: Product) => (
          <div className="productList__item">
            <img
              className="productList__image"
              src={product.headshot}
              alt={`${product.instructor} instructor`}
            />
            <div className="productList__instructor">{product.instructor}</div>
            <div className="productList__class-name">{product.class_name}</div>
            <div className="productList__description">{product.full_description}</div>
            <button className="productList__button" onClick={() => addProduct(product)}>
              {t('products.add')}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

interface ProductsListInterface {
  products: Product[];
}
