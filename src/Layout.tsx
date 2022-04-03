import { Link } from 'react-router-dom';

export const Layout = ({ children }: LayoutProp) => {
  return (
    <section>
      <header>
        <nav>
          <h4>MasterClass</h4>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <main>{children}</main>
    </section>
  );
};

interface LayoutProp {
  children: React.ReactNode;
}
