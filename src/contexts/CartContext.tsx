import { CartProduct, Product } from 'interfaces/Products';
import { createContext } from 'react';
import { useCartContext } from './useCartContext';

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const { addProduct, cartAmount, clearCart, removeProduct, selectedProducts } = useCartContext();

  return (
    <CartContext.Provider
      value={{
        addProduct,
        cartAmount,
        clearCart,
        removeProduct,
        selectedProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

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
}
