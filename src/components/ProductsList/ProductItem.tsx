import { CartContext } from 'Contexts/CartContext';
import { useContext } from 'react';

export const ProductItem = ({ id, name }: ProductItemProps) => {
  const { addProduct } = useContext(CartContext);

  return (
    <div>
      {name}
      <button onClick={() => addProduct({ id, name })}>➕</button>
    </div>
  );
};

interface ProductItemProps {
  id: number;
  name: string;
}
