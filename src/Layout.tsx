import { CartContext } from 'contexts/CartContext';
import useTranslation from 'hooks/useTranslation';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Layout = ({ children }: LayoutProp) => {
  const t = useTranslation();
  const { cartAmount } = useContext(CartContext);

  return (
    <section>
      <header>
        <nav>
          <h4>{t('checkoutProcess.layout.title')}</h4>
          <Link to="/">{t('checkoutProcess.layout.products')}</Link>
          <Link to="/cart">
            {t('checkoutProcess.layout.cart')} ({cartAmount()})
          </Link>
        </nav>
      </header>

      <main>{children}</main>
    </section>
  );
};

interface LayoutProp {
  children: React.ReactNode;
}
