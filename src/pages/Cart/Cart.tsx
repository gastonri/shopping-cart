import { CartContext } from 'contexts/CartContext';
import useTranslation from 'hooks/useTranslation';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

import './Cart.scss';

export const Cart = () => {
  const t = useTranslation();
  const { addProduct, cartAmount, clearCart, removeProduct, selectedProducts } = useContext(CartContext);

  return (
    <div className="cart">
      <h1 className="cart__title">
        {t('cart.title')} ({cartAmount()})
      </h1>

      {!Boolean(selectedProducts.length) && <div className="cart__empty">{t('cart.empty')}</div>}

      <div className="cart__item-wrapper">
        {React.Children.toArray(
          selectedProducts.map(({ id, name, amount }) => (
            <div className="cart__item">
              <div className="cart__item-name">{name}</div>
              <div className="cart__item-buttons">
                <button className="cart__button-minus" onClick={() => removeProduct(id)}>
                  {t('cart.remove')}
                </button>
                <div className="cart__amount">{amount}</div>
                <button className="cart__button-add" onClick={() => addProduct({ id, name })}>
                  {t('cart.add')}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {Boolean(selectedProducts.length) && (
        <div className="cart__button-wrapper">
          <button className="cart__button-clear" onClick={clearCart}>{t('cart.clear')}</button>
          <Link to={routes.checkout}>
            <button className="cart__button-checkout">{t('cart.checkout')}</button>
          </Link>
        </div>
      )}
    </div>
  );
};
