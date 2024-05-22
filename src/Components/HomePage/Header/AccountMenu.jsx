import { Menu } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../utils/firebaseConfig';
import useUserContext from '../../../Hooks/useUserContext';
import {
  ArrowLeftStartOnRectangleIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';

const AccountMenu = () => {
  const { user } = useUserContext();
  const [avatarState, setAvatarState] = useState('loading');
  const navigate = useNavigate();

  const signOut = async () => {
    navigate('/');
    auth.signOut();
    window.location.reload();
  };

  return (
    <Menu>
      <Menu.Button className='relative'>
        {avatarState === 'loading' && user?.photoURL && (
          <div className='absolute bg-slate-200 w-10 h-10 rounded-full animate-pulse'></div>
        )}
        {avatarState === 'error' && (
          <UserIcon className='fill-primary w-9 md:w-10' />
        )}
        {user?.photoURL ? (
          <div>
            {avatarState !== 'error' && (
              <img
                onLoad={() => {
                  setAvatarState('loaded');
                }}
                onError={() => {
                  setAvatarState('error');
                }}
                src={user?.photoURL}
                alt='user photo '
                className='h-10 w-10 rounded-full'
              />
            )}
          </div>
        ) : (
          <UserIcon className='fill-primary w-9 md:w-10' />
        )}
      </Menu.Button>
      <Menu.Items className={'text-main-900'}>
        <div
          className='bg-white border-indigo-100 border shadow p-4 w-48 rounded-md rounded-t-none
         absolute right-0 top-full flex flex-col gap-2'
        >
          <div className='border-b-2 border-gray-200 py-2 text-slate-800'>
            <div>
              Hi,
              <span className='font-medium text-lg mx-2 text-primary'>
                {user?.displayName}
              </span>
            </div>
          </div>
          <Menu.Item>
            {({ active }) => (
              <Link to={'profile'}>
                <div
                  className='p-2 rounded flex gap-3 items-center
              hover:bg-slate-100 hover:underline underline-offset-2'
                >
                  <UserCircleIcon className='w-7' />
                  <span>Profile</span>
                </div>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className='relative rounded flex items-center gap-3 p-2
               hover:bg-slate-100 hover:underline underline-offset-2'
              >
                <ArrowLeftStartOnRectangleIcon className='w-7' />
                Logout
                <button onClick={signOut} className='absolute inset-0'></button>
              </div>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};
export default AccountMenu;
