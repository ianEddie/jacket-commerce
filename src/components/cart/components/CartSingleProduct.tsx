import Price from '@components/UI/Price';
import DeleteButton from './DeleteButton';
import type { productId } from '@components/products/types';
import CartQuantity from './CartQuantity';
import { useActions } from '../hooks/useActions';

interface Props {
  name: string;
  imageFront: any;
  price: number;
  id: productId;
  quantity: number;
}

export default function CartSingleProduct({
  name,
  imageFront,
  price,
  id,
  quantity
}: Props) {
  const { getSubTotalPrice } = useActions();
  const subTotal = getSubTotalPrice(price, quantity);

  return (
    <article className='border border-stone-800 px-2 bg-zinc-50 grid grid-cols-5'>
      <picture className='flex justify-center items-center'>
        <img
          src={imageFront.src}
          className='size-[7.2em]'
          loading='lazy'
        />
      </picture>
      <div className='flex justify-center items-center'>
        <h3>{name}</h3>
      </div>
      <div className='flex justify-center items-center'>
        <CartQuantity
          id={id}
          quantity={quantity}
        />
      </div>
      <div className='flex justify-center items-center'>
        <Price>{subTotal}</Price>
      </div>
      <div className='flex justify-center items-center'>
        <DeleteButton id={id} />
      </div>
    </article>
  );
}
