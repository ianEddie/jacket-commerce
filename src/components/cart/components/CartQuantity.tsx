import type { productId } from '@components/products/types.js';
import DecrementButton from './DecrementButton.tsx';
import IncrementButton from './IncrementButton.tsx';

interface Props {
  id: productId;
  quantity: number;
}

export default function CartQuantity({ id, quantity }: Props) {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <DecrementButton id={id} />
      <strong>{quantity}</strong>
      <IncrementButton id={id} />
    </div>
  );
}
