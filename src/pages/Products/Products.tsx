import { ProductsList } from 'components/ProductsList/ProductsList';
import { useProducts } from './useProducts';

export const Products = () => {
  const { isLoading, products } = useProducts();

  return (
    <>
      <h1>Products</h1>
      {isLoading ? 'Loading...' : <ProductsList products={products} />}
    </>
  );
};
