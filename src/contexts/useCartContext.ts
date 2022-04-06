import { storage } from 'constants/common';
import { useStorage } from 'hooks/useStorage';
import { CartProduct, Product } from 'interfaces/Products';
import { useEffect, useState } from 'react';

export const useCartContext = () => {
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

  return {
    addProduct,
    removeProduct,
    clearCart,
    cartAmount,
    selectedProducts,
  };
};
