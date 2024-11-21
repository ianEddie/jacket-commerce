import type { productId } from '@components/products/types';
import { useActions } from '../hooks/useActions';

interface Props {
  id: productId;
}

export default function DeleteButton({ id }: Props) {
  const { handleRemove } = useActions();

  return (
    <button
      onClick={() => handleRemove(id)}
      className='bg-[#f44336] hover:shadow-md hover:shadow-stone-800/20 hover:text-white hover:scale-105 transition-all duration-300 flex items-center px-4 py-px text-zinc-50 border border-stone-800 text-sm'
    >
      Delete
    </button>
  );
}
