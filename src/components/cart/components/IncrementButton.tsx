import type { productId } from '@components/products/types';
import MoreIcon from '../icons/more-icon';
import { useActions } from '../hooks/useActions';

interface Props {
  id: productId;
}
export default function IncrementButton({ id }: Props) {
  const { handleIncrement } = useActions();
  return (
    <button
      onClick={() => handleIncrement(id)}
      className='bg-yellow-200 p-1 border border-stone-800 rounded-full flex items-center justify-center'
    >
      <MoreIcon />
    </button>
  );
}
