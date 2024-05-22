import { twMerge } from 'tailwind-merge';

const LoadingSkeleton = ({ className }) => {
  return (
    <div
      className={twMerge('bg-slate-200 w-20 h-20  animate-pulse', className)}
    ></div>
  );
};
export default LoadingSkeleton;
