import { CartContext } from 'contexts/CartContext';
import useTranslation from 'hooks/useTranslation';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Layout.scss';

export const Layout = ({ children }: LayoutProp) => {
  const t = useTranslation();
  const { cartAmount } = useContext(CartContext);

  return (
    <section>
      <header>
        <nav className="layout__nav">
          <h4 className="layout__title">{t('checkoutProcess.layout.title')}</h4>
          <span>
            <NavLink className="layout__link"
            activeClassName='active'
             to="/">{t('checkoutProcess.layout.products')}</NavLink>
            <NavLink className="layout__link" to="/cart">
              {t('checkoutProcess.layout.cart')} ({cartAmount()})
            </NavLink>
          </span>
        </nav>
      </header>

      <main>{children}</main>
    </section>
  );
};

interface LayoutProp {
  children: JSX.Element | JSX.Element [];
}
