import ShineIcon from '../icons/shine-icon';

export default function EmptyCart() {
  return (
    <section className='h-full w-full flex flex-col justify-center items-center gap-6 font-primary'>
      <article className='shadow-custom border-2 border-stone-800 w-1/3 h-[40%] flex justify-center items-center gap-2 bg-gradient-to-b from-zinc-50 via-zinc-50/90 to-zinc-50/60'>
        <ShineIcon />
        <h1 className='font-bold uppercase tracking-wide text-[22px] flex gap-1'>
          your cart is empty
        </h1>
        <ShineIcon />
      </article>
      <a
        href='/#products'
        className='shadow-custom bg-yellow-400 w-1/3 text-center py-2 font-semibold uppercase border-2 border-stone-800 hover:scale-105 transition-transform duration-300'
      >
        Check our products
      </a>
    </section>
  );
}
