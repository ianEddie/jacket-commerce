

export default function QuantityButton({ children }: any) {
  return (
    <button className='bg-yellow-200 p-1  border border-stone-800 rounded-full flex items-center justify-center'>
      {children}
    </button>
  );
}
