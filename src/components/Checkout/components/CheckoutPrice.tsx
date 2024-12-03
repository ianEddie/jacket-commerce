import { useActions } from '@cart/hooks/useActions';
import CheckoutButton from './CheckoutButton';
import Price from '@ui/Price';

export default function CartCheckoutPrice() {
  const { getCartTotalPrice } = useActions();
  const { shippingValue, subTotal, totalPrice } = getCartTotalPrice();
  return (
    <article className='lg:h-auto lg:p-4 px-2 pb-2 tracking-wide flex flex-col justify-between lg:gap-4 flex-grow'>
      <h4 className='flex justify-between items-center'>
        <span className='text-stone-500 lg:text-[18px] text-base font-medium'>
          Subtotal
        </span>
        <Price value={subTotal} />
      </h4>
      <h4 className='flex justify-between items-center'>
        <span className='text-stone-500 font-medium lg:text-[18px] text-base'>
          Shipping
        </span>
        <Price value={shippingValue} />
      </h4>
      <h4 className='flex justify-between items-center'>
        <span className='font-semibold lg:text-[18px] text-base'>Total</span>
        <Price value={totalPrice} />
      </h4>
      <CheckoutButton />
    </article>
  );
}
