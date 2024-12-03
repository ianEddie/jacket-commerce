import { useActions } from '@cart/hooks/useActions';
import CheckoutProductItem from './CheckoutProductItem';

export default function CheckoutProductList() {
  const { cart } = useActions();
  return (
    <ul className='flex flex-col w-full lg:gap-3 gap-2 overflow-auto flex-grow'>
      {cart.map((product) => (
        <CheckoutProductItem
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  );
}
