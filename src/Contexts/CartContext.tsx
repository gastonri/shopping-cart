import { Product } from 'interfaces/Products';
import { useState } from 'react';
import { createContext, ReactNode } from 'react';

const initialState: CartContextState = {
  addProduct: () => {},
  removeProduct: () => {},
  selectedProducts: [],
};

interface CartContextState {
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  selectedProducts: Product[];
}

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => setSelectedProducts(currentValue => [...currentValue, product]);

  const removeProduct = (id: number) => {
    const productsCopy = [...selectedProducts];
    const index = productsCopy.findIndex(product => {
      return product.id === id;
    });

    if (index > -1) {
      productsCopy.splice(index, 1);
    }

    setSelectedProducts(productsCopy);
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        selectedProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export interface CartProviderProps {
  children: ReactNode;
}
