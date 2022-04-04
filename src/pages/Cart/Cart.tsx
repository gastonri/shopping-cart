import { CartContext } from 'contexts/CartContext';
import useTranslation from 'hooks/useTranslation';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

export const Cart = () => {
  const t = useTranslation();
  const { addProduct, cartAmount, removeProduct, selectedProducts } = useContext(CartContext);

  return (
    <>
      <h1>
        {t('cart.title')} ({cartAmount()})
      </h1>

      {!Boolean(selectedProducts.length) && <div>{t('cart.empty')}</div>}

      {React.Children.toArray(
        selectedProducts.map(({ id, name, amount }) => (
          <div>
            <span>{name}</span> - <span>Amount: {amount}</span>
            <span> - </span>
            <button onClick={() => addProduct({ id, name })}>{t('cart.add')}</button>
            <button onClick={() => removeProduct(id)}>{t('cart.remove')}</button>
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
