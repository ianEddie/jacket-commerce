import { useActions } from '@components/cart/hooks/useActions';

export default function CartValue() {
  const { cartValue } = useActions();
  return <span className='text-sm font-bold text-red-500'>{cartValue}</span>;
}
