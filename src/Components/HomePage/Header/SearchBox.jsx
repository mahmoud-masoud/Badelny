import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const SearchBox = () => {
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

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full max-w-lg flex-1 gap-2 transition-all 
         duration-300 md:static md:w-80 md:p-0 max-md:hidden`}
    >
      <div
        className='relative flex w-full flex-1
           bg-white'
      >
        <input
          type='text'
          placeholder='search by skill'
          value={searchQuery}
          onChange={getSearchQuery}
          className={`block h-full w-full rounded-full py-2 px-4 outline-0 border border-slate-400
             focus:border-primary bg-primary/5 pr-10
          `}
        />
        <div
          className='absolute right-2 top-1/2 flex -translate-y-1/2
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
          <button className=' bg-after p-1 '>
            <MagnifyingGlassIcon className='w-6 stroke-secondary stroke-2' />
          </button>
        </div>
      </div>
    </form>
  );
};
export default SearchBox;
