import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'Layout';
import { Products } from 'pages/Products/Products';
import { Cart } from 'pages/Cart/Cart';
import { Checkout } from 'pages/Checkout/Checkout';
import { routes } from 'routes';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={routes.cart}>
            <Cart />
          </Route>
          <Route path={routes.checkout}>
            <Checkout />
          </Route>
          <Route path={routes.products}>
            <Products />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
