import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const PasswordInput = ({ className, register, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='relative'>
      <input
        placeholder='password'
        type={isVisible ? 'text' : 'password'}
        {...props}
        {...register}
        className={twMerge(
          `w-full rounded-md border border-slate-400 py-2 pl-4 pr-10 outline-0
      duration-300 hover:border-slate-600 focus:shadow-input max-sm:text-sm`,
          className
        )}
      ></input>

      <button
        type='button'
        onClick={() => setIsVisible(!isVisible)}
        className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-700'
      >
        {isVisible ? (
          <EyeSlashIcon className='h-6' />
        ) : (
          <EyeIcon className='h-6' />
        )}
      </button>
    </div>
  );
};
export default PasswordInput;
