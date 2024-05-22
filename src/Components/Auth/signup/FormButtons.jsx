import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import LoadingSpinner from '../../UI/LoadingSpinner';

const FormButtons = ({ back, isFirst, isLast, isLoading }) => {
  return (
    <div className='flex gap-6 justify-between items-center pt-8'>
      <button
        onClick={back}
        type='button'
        className={`bg-white font-medium ${
          isFirst ? 'text-slate-400' : 'text-secondary'
        }
     flex items-center justify-center gap-1`}
      >
        <ChevronLeftIcon className='h-5' />
        back
      </button>

      <button
        className={`${isLast && 'relative'} bg-primary px-6 py-2 font-medium
   text-white rounded transition-all duration-150 hover:bg-main-600`}
      >
        {isLast && (
          <span className={`${isLoading ? 'text-transparent' : ''}`}>
            Create account
            {isLoading && (
              <LoadingSpinner className={'absolute h-7 w-7 top-2 '} />
            )}
          </span>
        )}
        {!isLoading && !isLast && (
          <div className='flex items-center justify-center gap-1'>
            next
            <ChevronRightIcon className='h-5' />
          </div>
        )}
      </button>
    </div>
  );
};
export default FormButtons;
