import Price from '@components/UI/Price';
import DeleteButton from './DeleteButton';
import type { Product, productId } from '@components/products/types';
import CartQuantity from './CartQuantity';

interface Props {
  name: string;
  imageFront: any;
  price: number;
  id: productId;
}

export default function CartSingleProduct({
  name,
  imageFront,
  price,
  id
}: Props) {
  return (
    <article className='border border-stone-800 px-2 bg-zinc-50 grid grid-cols-5'>
      <picture className='flex justify-center items-center'>
        <img
          src={imageFront.src}
          className='size-[7.2em]'
        />
      </picture>
      <div className='flex justify-center items-center'>
        <h3>{name}</h3>
      </div>
      <div className='flex justify-center items-center'>
        <CartQuantity />
      </div>
      <div className='flex justify-center items-center'>
        <Price>{price}</Price>
      </div>
      <div className='flex justify-center items-center'>
        <DeleteButton id={id} />
      </div>
    </article>
  );
}
