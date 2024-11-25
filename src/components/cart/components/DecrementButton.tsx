import type { productId } from '@components/products/types';
import LessIcon from '../icons/less-icon';
import { useActions } from '../hooks/useActions';

interface Props {
  id: productId;
}

export default function DecrementButton({ id }: Props) {
  const { handleDecrement } = useActions();

  return (
    <button
      onClick={() => handleDecrement(id)}
      className='bg-yellow-200 p-1  border border-stone-800 rounded-full flex items-center justify-center'
    >
      <LessIcon />
    </button>
  );
}
