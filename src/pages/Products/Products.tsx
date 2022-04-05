import { ProductsList } from 'components/ProductsList/ProductsList';
import { useProducts } from './useProducts';

import './Products.scss';

export const Products = () => {
  const { isLoading, products } = useProducts();

  return (
    <>
      <h1 className='products__title'>Products</h1>
      {isLoading ? 'Loading...' : <ProductsList products={products} />}
    </>
  );
};
