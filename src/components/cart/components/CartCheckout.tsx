import Price from '@components/UI/Price';
import { useActions } from '../hooks/useActions';

export default function CartCheckout() {
  const { getCartSubTotalPrice, getShippingValue } = useActions();
  const subTotal = getCartSubTotalPrice();
  const shippingValue = getShippingValue();
  const totalPrice = subTotal + shippingValue;
  return (
    <aside className='bg-gradient-to-b from-zinc-50 via-zinc-50/90 to-zinc-50/50 h-full font-primary flex-grow border-2 border-stone-800'>
      <h3 className='uppercase font-bold p-4 border-b border-stone-800'>
        Checkout
      </h3>
      <article className='p-4 tracking-wide flex flex-col gap-4'>
        <h4 className='flex justify-between font-medium text-[18px]'>
          <span className='text-stone-500'>Subtotal</span>
          <Price>{subTotal}</Price>
        </h4>
        <h4 className='flex justify-between font-medium text-[18px]'>
          <span className='text-stone-500'>Shipping</span>
          <Price>{shippingValue}</Price>
        </h4>
        <h4 className='flex justify-between font-medium text-[18px]'>
          <span className='font-semibold'>Total</span>
          <Price>{totalPrice}</Price>
        </h4>
      </article>
    </aside>
  );
}
