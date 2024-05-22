import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

const Image = ({ avatarUrl, className }) => {
  const [avatarState, setAvatarState] = useState('loading');

  return (
    <div className={twMerge('h-10 w-10 rounded-full', className)}>
      {avatarState === 'loading' && avatarUrl && (
        <div className='absolute bg-slate-200 max-h-full rounded-full animate-pulse'></div>
      )}
      {avatarState === 'error' && (
        <UserCircleIcon className='fill-primary max-h-full' />
      )}
      {avatarUrl ? (
        <img
          onLoad={() => {
            setAvatarState('loaded');
          }}
          onError={() => {
            setAvatarState('error');
          }}
          src={avatarUrl}
          alt='user avatar'
          className='rounded-full max-h-full'
        />
      ) : (
        <UserCircleIcon className='fill-white max-h-full rounded-full bg-slate-300' />
      )}
    </div>
  );
};
export default Image;
