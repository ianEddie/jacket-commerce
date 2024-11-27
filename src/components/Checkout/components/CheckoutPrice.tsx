import Price from '@components/UI/Price';
import { useActions } from '@cart/hooks/useActions';
import CheckoutButton from './CheckoutButton';

export default function CartCheckoutPrice() {
  const { getCartTotalPrice } = useActions();
  const { shippingValue, subTotal, totalPrice } = getCartTotalPrice();
  return (
    <article className='p-4 tracking-wide flex flex-col gap-4  flex-grow'>
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
      <CheckoutButton />
    </article>
  );
}
