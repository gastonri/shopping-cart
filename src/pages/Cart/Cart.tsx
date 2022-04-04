import { CartContext } from 'Contexts/CartContext';
import useTranslation from 'hooks/useTranslation';
import { Products } from 'pages/Products/Products';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

export const Cart = () => {
  const t = useTranslation();
  const { selectedProducts, removeProduct } = useContext(CartContext);

  return (
    <>
      <h1>{t('cart.title')} ({selectedProducts.length})</h1>
      {React.Children.toArray(
        selectedProducts.map(({ id, name }) => (
          <div>
            <span>{id}</span>-<span>{name}</span>
            <button onClick={() => removeProduct(id)}>➖</button>
          </div>
        ))
      )}
      {Boolean(selectedProducts.length) && (
        <Link to={routes.checkout}>
          <button>{t('cart.checkout')}</button>
        </Link>
      )}
    </>
  );
};
