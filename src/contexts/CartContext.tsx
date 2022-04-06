import { CartProduct, Product } from 'interfaces/Products';
import { createContext, useContext } from 'react';
import { useCartContext } from './useCartContext';

const CartContext = createContext({} as CartContextProps);

const CartProvider = ({ children, props }: CartProviderProps) => {
  const { addProduct, cartAmount, clearCart, removeProduct, selectedProducts } = useCartContext();

  return (
    <CartContext.Provider
      value={{
        addProduct,
        cartAmount,
        clearCart,
        removeProduct,
        selectedProducts,
        ...props,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error('Cannot use `useCart` outside of a CartProvider');
  }

  return cart;
};

export { CartProvider, useCart };

interface CartState {
  selectedProducts: CartProduct[];
}

interface CartContextProps extends CartState {
  addProduct: (product: Product) => void;
  cartAmount: () => number;
  clearCart: () => void;
  removeProduct: (id: number) => void;
}

interface CartProviderProps {
  children: JSX.Element | JSX.Element[];
  props?: CartContextProps;
}
