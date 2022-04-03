import { Product } from 'interfaces/Products';

export const ProductsList = ({ products }: ProductsListInterface) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

interface ProductsListInterface {
  products: Product[];
}
