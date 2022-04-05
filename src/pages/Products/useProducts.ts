import { getProducts } from 'api';
import { Product } from 'interfaces/Products';
import { useEffect, useState } from 'react';

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
