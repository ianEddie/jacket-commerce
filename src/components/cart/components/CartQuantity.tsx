import type { productId } from '@components/products/types.js';
import DecrementButton from './DecrementButton.tsx';
import IncrementButton from './IncrementButton.tsx';
import NumberFlow from '@number-flow/react';

interface Props {
  id: productId;
  quantity: number;
}

export default function CartQuantity({ id, quantity }: Props) {
  return (
    <div className='flex lg:gap-4 gap-2 justify-center items-center'>
      <DecrementButton id={id} />
      <NumberFlow
        value={quantity}
        className='font-semibold lg:text-base text-sm'
      />
      <IncrementButton id={id} />
    </div>
  );
}
