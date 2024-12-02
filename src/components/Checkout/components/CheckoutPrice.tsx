import { useActions } from '@cart/hooks/useActions';
import CheckoutButton from './CheckoutButton';
import Price from '@ui/Price';

export default function CartCheckoutPrice() {
  const { getCartTotalPrice } = useActions();
  const { shippingValue, subTotal, totalPrice } = getCartTotalPrice();
  return (
    <article className='p-4 tracking-wide flex flex-col gap-4  flex-grow'>
      <h4 className='flex justify-between items-center'>
        <span className='text-stone-500 text-[18px] font-medium'>Subtotal</span>
        <Price value={subTotal} />
      </h4>
      <h4 className='flex justify-between items-center'>
        <span className='text-stone-500 font-medium text-[18px]'>Shipping</span>
        <Price value={shippingValue} />
      </h4>
      <h4 className='flex justify-between items-center'>
        <span className='font-semibold text-[18px]'>Total</span>
        <Price value={totalPrice} />
      </h4>
      <CheckoutButton />
    </article>
  );
}
