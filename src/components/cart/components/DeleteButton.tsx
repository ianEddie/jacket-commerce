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
      className='bg-[#f44336] hover:shadow-md hover:shadow-stone-800/20 hover:text-white hover:scale-105 transition-all duration-300 flex items-center lg:px-4 px-2 py-px text-zinc-50 lg:border border-b border-l border-stone-800 lg:text-sm text-[10px]'
    >
      Delete
    </button>
  );
}
