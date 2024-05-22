import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const MobileSearch = () => {
  const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [searchQuery, setSearchQuery] = useState(query || '');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const getSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const onClear = () => {
    setSearchQuery('');
  };

  const openSearchBar = () => {
    setIsOpenOnMobile(true);
  };

  return (
    <>
      {!isOpenOnMobile && (
        <button onClick={openSearchBar} className='ml-auto mr-2 md:hidden'>
          <MagnifyingGlassIcon className='w-7 stroke-secondary stroke-2' />
        </button>
      )}

      {isOpenOnMobile && (
        <div
          className='md:hidden absolute z-50 right-0.5 h-full w-full flex p-2
        justify-around bg-white gap-4'
        >
          <button onClick={() => setIsOpenOnMobile(false)}>
            <ArrowLeftIcon className='text-secondary stroke-2 w-6' />
          </button>
          <form
            onSubmit={onSubmit}
            className={` flex w-full max-w-lg flex-1 gap-2 transition-all 
         duration-300 md:static md:w-80 md:p-0`}
          >
            <div
              className='relative flex justify-center items-center w-full flex-1
           bg-white'
            >
              <input
                type='text'
                placeholder='search by skill'
                value={searchQuery}
                onChange={getSearchQuery}
                className={`h-full w-full rounded-full py-2 px-4 outline-0
             border border-slate-300
             focus:border-primary pr-12
          `}
              />
              <div
                className='absolute right-1 top-1/2 flex -translate-y-1/2
           items-center justify-center gap-1 pr-1'
              >
                {searchQuery && (
                  <button
                    onClick={onClear}
                    type='button'
                    className='rounded-full p-1.5 hover:bg-slate-200 text-secondary'
                  >
                    <XMarkIcon className='h-6 w-6' />
                  </button>
                )}
                <button className='bg-after p-1 '>
                  <MagnifyingGlassIcon className='w-6 stroke-secondary stroke-2' />
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default MobileSearch;
