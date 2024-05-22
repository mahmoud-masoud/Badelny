import { twMerge } from 'tailwind-merge';

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={twMerge('container mx-auto max-w-screen-xl px-4', className)}
    >
      {children}
    </div>
  );
};
export default Wrapper;
