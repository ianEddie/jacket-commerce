import CartCheckout from '../../Checkout/components/Checkout';
import { useActions } from '../hooks/useActions';
import CartProducts from './CartProducts';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const { cartValue } = useActions();
  const emptyCart = cartValue < 1;
  return (
    <main className='h-screen p-10 gap-10 flex justify-center items-center'>
      {emptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <CartProducts />
          <CartCheckout />
        </>
      )}
    </main>
  );
}
