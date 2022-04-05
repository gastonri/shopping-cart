import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { DEFAULT_LANGUAGE } from 'constants/common';
import { App } from './App';
import { CartProvider } from 'contexts/CartContext';
import locales from 'locales';
import flatten from 'flat';

import 'styles/styles.scss';

const messages = locales['en'];

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
      <CartProvider>
        <App />
      </CartProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
