import { CartContext } from 'Contexts/CartContext';
import { Products } from 'pages/Products/Products';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

export const Cart = () => {
  const { selectedProducts, removeProduct } = useContext(CartContext);

  return (
    <>
      <h1>Cart ({selectedProducts.length})</h1>
      {React.Children.toArray(
        selectedProducts.map(({ id, name }) => (
          <div>
            <span>{id}</span>-<span>{name}</span>
            <button onClick={() => removeProduct(id)}>-</button>
          </div>
        ))
      )}
      {Boolean(selectedProducts.length) && (
        <Link to={routes.checkout}>
          <button>✅ Proceed to checkout</button>
        </Link>
      )}
    </>
  );
};
