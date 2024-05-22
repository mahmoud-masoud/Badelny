import Wrapper from '../../UI/Wrapper';
import SearchBox from './SearchBox';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useUserContext from '../../../Hooks/useUserContext';
import AccountMenu from './AccountMenu';
import LoadingSpinner from '../../UI/LoadingSpinner';
import Compass, { CompassSolid } from '../../../assets/icons/Compass';
import MobileSearch from './MobileSearch';
import { ChatBubbleLeftEllipsisIcon as ChatSolid } from '@heroicons/react/24/solid';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { user, userIsLoading } = useUserContext();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className='shadow-md bg-white max-md:py-1'>
      <Wrapper className='px-2'>
        <div className='relative'>
          <div className='flex gap-1 justify-between items-center'>
            <Link to={'/'} className='flex justify-center items-center mx-2'>
              <img src='./icons/logo.svg' alt='' className='w-9 md:w-10 ' />
            </Link>

            <SearchBox />

            <div className='relative flex p-2 md:p-3 hover:bg-main-50 duration-200'>
              <Link
                to='/explore'
                className='text-primary font-bold cursor-pointer absolute inset-0 
                  inline-block p-4'
              ></Link>
              {location.pathname === '/explore' ? (
                <CompassSolid />
              ) : (
                <Compass />
              )}
            </div>

            <div className='relative flex p-2 md:p-3 hover:bg-main-50 duration-200'>
              <Link
                to='/chat'
                className='text-primary font-bold cursor-pointer absolute inset-0 
                  inline-block p-4'
              ></Link>
              {location.pathname === '/chat' ? (
                <ChatSolid className='w-8 md:w-10 fill-secondary' />
              ) : (
                <ChatBubbleLeftEllipsisIcon className='w-8 md:w-10 stroke-secondary' />
              )}
            </div>

            <MobileSearch />

            <div className='mr-1 flex justify-center items-center'>
              {!user && !userIsLoading && (
                <button
                  onClick={() => navigate('/signup')}
                  className='bg-primary hover:bg-main-600 duration-150 px-4 py-2 text-white font-medium rounded'
                >
                  Sign up
                </button>
              )}

              {userIsLoading && (
                <LoadingSpinner className={'border-primary border-r-white'} />
              )}

              {user && <AccountMenu />}
            </div>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};
export default Navbar;
