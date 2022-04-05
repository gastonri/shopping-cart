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
        products.map(({ name, id }: Product) => (
          <div className="productList__item">
            <div className="productList__name">{name}</div>
            <button className="productList__button" onClick={() => addProduct({ id, name })}>
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
