import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'Layout';
import { ProductsPage } from 'pages/Products';
import { Cart } from 'pages/Cart';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/">
            <ProductsPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
