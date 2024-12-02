import Price from '@ui/Price';
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
    <article className='relative border border-stone-800 px-2 bg-zinc-50 grid lg:grid-cols-5 grid-cols-4'>
      <picture className='flex justify-center items-center'>
        <img
          src={imageFront.src}
          className='lg:size-[7.2em] size-[5.5em]'
          loading='lazy'
        />
      </picture>
      <div className='flex justify-center items-center'>
        <h3 className='lg:text-base text-[12px] text-center'>{name}</h3>
      </div>
      <div className='flex justify-center items-center'>
        <CartQuantity
          id={id}
          quantity={quantity}
        />
      </div>
      <div className='flex justify-center items-center'>
        <Price value={subTotal} />
      </div>
      <div className='flex lg:static absolute justify-center items-center right-0 top-0'>
        <DeleteButton id={id} />
      </div>
    </article>
  );
}
