export default function Price({ children }: any) {
  return (
    <span className='flex items-center gap-1'>
      <small className='text-teal-600 font-semibold'>$</small>
      <strong>{children}</strong>
    </span>
  );
}
