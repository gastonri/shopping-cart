import { CartContext } from 'Contexts/CartContext';
import useTranslation from 'hooks/useTranslation';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const Layout = ({ children }: LayoutProp) => {
  const t = useTranslation();
  const { selectedProducts } = useContext(CartContext);

  return (
    <section>
      <header>
        <nav>
          <h4>{t('checkoutProcess.layout.title')}</h4>
          <Link to="/">{t('checkoutProcess.layout.products')}</Link>
          <Link to="/cart">
            {t('checkoutProcess.layout.cart')} ({selectedProducts.length})
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
