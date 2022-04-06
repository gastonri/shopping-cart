import { CartContext } from 'contexts/CartContext';
import useTranslation from 'hooks/useTranslation';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

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
            <Link className="layout__link" to="/">{t('checkoutProcess.layout.products')}</Link>
            <Link className="layout__link" to="/cart">
              {t('checkoutProcess.layout.cart')} ({cartAmount()})
            </Link>
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
