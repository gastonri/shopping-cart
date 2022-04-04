import { useEffect, useState } from 'react';
import { Product } from 'interfaces/Products';
import { getProducts } from 'api';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((data: Product[]) => {
      setProducts(data);
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    products,
  };
};
