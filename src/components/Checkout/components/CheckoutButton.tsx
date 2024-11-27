import { useActions } from '@cart/hooks/useActions';

export default function CheckoutButton() {
  const { clearCart } = useActions();
  return (
    <button 
    onClick={clearCart}
    className='bg-yellow-400 py-1 font-bold border-2 border-stone-800'>
      Checkout
    </button>
  );
}
