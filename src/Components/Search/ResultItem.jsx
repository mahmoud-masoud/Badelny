import { Link, useNavigate } from 'react-router-dom';
import useUserContext from '../../Hooks/useUserContext';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import Image from '../UI/Image';
import { useChatStore } from '../../store/chat';

const ResultItem = ({ foundUser }) => {
  const { setSelectedUser } = useChatStore();

  const { user, userIsLoading } = useUserContext();

  const {
    name,
    email,
    avatar,
    phone,
    offeredSkill,
    wantedSkill,
    age,
    gender,
    country,
  } = foundUser;

  const navigate = useNavigate();

  const onContactClick = () => {
    setSelectedUser(foundUser);
    navigate('/chat');
  };

  return (
    <div className='p-3 md:p-4 shadow border rounded bg-white text-base'>
      <div className='flex flex-col md:flex-row justify-between items-between gap-6'>
        <div className=''>
          <div className='flex items-center gap-4 mb-6'>
            <Image avatarUrl={avatar} className={'h-16 w-16'} />
            <p className='text-xl font-medium'>{name}</p>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-start gap-3 md:gap-10 mb-5'>
            <div className='flex gap-2 items-center justify-center'>
              <span className='font-medium'>Wanted Skill:</span>
              <span className='font-bold text-primary text-md md:text-lg'>
                {wantedSkill}
              </span>
            </div>
            <div className='flex gap-2 items-center justify-center'>
              <span className='font-medium'>Offered Skill:</span>
              <span className='font-bold text-primary text-md md:text-lg'>
                {offeredSkill}
              </span>
            </div>
          </div>

          {user && (
            <div className='flex flex-col justify-between items-start mb-5'>
              <p className='font-medium mb-2'>Contact Info</p>
              <div className='flex gap-3 max-sm:flex-col w-full '>
                <div className='flex gap-2'>
                  <span className='font-medium'>Email: </span>
                  <span>{email}</span>
                </div>
                <p className=''>
                  <span className='font-medium'>Phone: </span>
                  <span className=''>{phone}</span>
                </p>
              </div>
            </div>
          )}
          <div className='flex flex-col justify-between text-sm'>
            <p className='font-medium mb-2'>More Info</p>
            <div className='flex items-center md:justify-between gap-2'>
              <p className=''>age: {age}</p>
              <p className=''>gender: {gender}</p>
              <p className=''>country: {country}</p>
            </div>
          </div>
        </div>

        {user && (
          <button
            onClick={onContactClick}
            className='block text-center bg-primary text-white font-medium
           rounded-full px-4 py-2 hover:bg-main-600 duration-200 h-fit'
          >
            Message
          </button>
        )}
      </div>
      {!user && !userIsLoading && (
        <div
          className='flex items-center gap-2 mt-6 bg-main-50
         w-fit p-2 md:px-4 md:py-3 rounded text-sm md:text-base'
        >
          <InformationCircleIcon className='text-main-700 w-7' />
          <p className='text-slate-700'>Sign up to send messages.</p>
          <Link
            to={'/signup'}
            className='w-fit inline-block text-main-800
            underline-offset-4 hover:underline font-medium'
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};
export default ResultItem;
