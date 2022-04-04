import React, { useContext } from 'react';
import { Product } from 'interfaces/Products';
import { CartContext } from 'contexts/CartContext';
import useTranslation from 'hooks/useTranslation';

export const ProductsList = ({ products }: ProductsListInterface) => {
  const t = useTranslation();
  const { addProduct } = useContext(CartContext);

  return (
    <div>
      {React.Children.toArray(
        products.map(({ name, id }: Product) => (
          <div>
            {name}
            <button onClick={() => addProduct({ id, name })}>{t('products.add')}</button>
          </div>
        ))
      )}
    </div>
  );
};

interface ProductsListInterface {
  products: Product[];
}
