import { createContext, ReactNode, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { Product } from 'interfaces/Products';
import { useEffect } from 'react';

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
  const [storedValue, setStoredValue] = useLocalStorage('CartStore', []);

  const addProduct = (product: Product) => {
    setSelectedProducts(currentValue => [...currentValue, product]);
    setStoredValue([...storedValue, product]);
  };

  const removeProduct = (id: number) => {
    const productsCopy = [...selectedProducts];
    const index = productsCopy.findIndex(product => {
      return product.id === id;
    });

    if (index > -1) {
      productsCopy.splice(index, 1);
    }

    setSelectedProducts(productsCopy);
    setStoredValue(productsCopy);
  };

  useEffect(() => {
    if (storedValue.length) setSelectedProducts(storedValue);
  }, []);

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
