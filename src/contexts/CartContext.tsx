import { storage } from 'constants/common';
import { useStorage } from 'hooks/useStorage';
import { CartProduct, Product } from 'interfaces/Products';
import { createContext, ReactNode, useEffect, useState } from 'react';

const initialState: CartContextState = {
  addProduct: () => {},
  cartAmount: () => 0,
  clearCart: () => {},
  removeProduct: () => {},
  selectedProducts: [],
};

interface CartContextState {
  addProduct: (product: Product) => void;
  cartAmount: () => number;
  clearCart: () => void;
  removeProduct: (id: number) => void;
  selectedProducts: CartProduct[];
}

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [selectedProducts, setSelectedProducts] = useState<CartProduct[]>([]);
  const [storedValue, setStoredValue] = useStorage(storage.cartStore, []);

  const addProduct = (product: Product) => {
    const productAdded = selectedProducts.find(({ id }) => id === product.id);

    if (productAdded) {
      productAdded.amount++;

      setSelectedProducts([...selectedProducts]);
      setStoredValue([...storedValue]);
    } else {
      setSelectedProducts([...selectedProducts, { ...product, amount: 1 }]);
      setStoredValue([...storedValue, { ...product, amount: 1 }]);
    }
  };

  const removeProduct = (id: number) => {
    const product = selectedProducts.find(cartProduct => cartProduct.id === id);

    if (product.amount > 1) {
      product.amount--;
      setSelectedProducts([...selectedProducts]);
      setStoredValue([...selectedProducts]);
    } else {
      setSelectedProducts([...selectedProducts.filter(cartProduct => cartProduct.id !== product.id)]);
      setStoredValue([...selectedProducts.filter(cartProduct => cartProduct.id !== product.id)]);
    }
  };

  const clearCart = () => {
    setSelectedProducts([]);
    setStoredValue([]);
  };

  const cartAmount = () => selectedProducts.reduce((acc, cartProduct) => acc + cartProduct.amount, 0);

  useEffect(() => {
    if (storedValue.length) setSelectedProducts(storedValue);
  }, [storedValue]);

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

interface CartProviderProps {
  children: ReactNode;
}
