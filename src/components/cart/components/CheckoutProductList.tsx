import { useActions } from '../hooks/useActions';
import CheckoutProductItem from './CheckoutProductItem';

export default function CheckoutProductList() {
  const { cart } = useActions();
  return (
    <ul className='flex flex-col gap-3 overflow-auto'>
      {cart.map((product) => (
        <CheckoutProductItem product={product} />
      ))}
    </ul>
  );
}
