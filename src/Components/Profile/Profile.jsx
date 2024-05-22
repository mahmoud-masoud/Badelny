import {
  InformationCircleIcon,
  PhoneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import useUserContext from '../../Hooks/useUserContext';
import LoadingPage from '../../Pages/LoadingPage';
import NotConnectPage from '../../Pages/NotConnectPage';
import { StarIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  const { userData, userDataIsLoading } = useUserContext();

  if (userDataIsLoading) return <LoadingPage />;
  if (!userData) return <NotConnectPage />;

  const {
    name,
    email,
    phone,
    age,
    gender,
    country,
    avatar,
    offeredSkill,
    wantedSkill,
  } = userData;

  return (
    <div className='py-10'>
      <div className='p-4 py-8 rounded-md text-slate-700 bg-white '>
        <h1 className='text-2xl font-medium mb-6 md:mb-10'>Profile</h1>

        <div className='w-20 md:w-24'>
          {avatar ? (
            <img
              src={avatar}
              alt='profile avatar'
              className='max-w-full rounded-full'
            />
          ) : (
            <UserCircleIcon className='max-w-full text-slate-400' />
          )}
        </div>

        <p className='font-medium text-xl mt-4'>{name}</p>

        <div className='mt-8'>
          <div className='flex gap-3 '>
            <p className='text-xl mb-6'>Skills</p>
            <StarIcon className='h-7 text-secondary' />
          </div>
          <div className='flex-col md:flex-row flex gap-4 md:gap-8 font-medium'>
            <div className='flex gap-4'>
              <span>Wanted Skill</span>
              <p className='text-primary text-lg'>{wantedSkill}</p>
            </div>
            <div className='flex gap-4'>
              <span>Offered Skill</span>
              <p className='text-primary text-lg'>{offeredSkill}</p>
            </div>
          </div>
        </div>

        <div className='w-full h-[2px] bg-slate-200 my-10'></div>

        <div className='text-lg '>
          <div className='flex gap-3 '>
            <p className='mb-6 text-xl'>Contact Info</p>
            <PhoneIcon className='h-6 text-secondary' />
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 '>
              <p className=''>Email</p>
              <p className='text-primary font-medium'>{email}</p>
            </div>
            <div className='flex gap-4 '>
              <p>Phone number</p>
              <p className='font-medium'>{phone}</p>
            </div>
          </div>
        </div>

        <div className='w-full h-[2px] bg-slate-200 my-10'></div>

        <div className='text-lg '>
          <div className='flex gap-3 '>
            <p className='mb-6 text-xl'>More Info</p>
            <InformationCircleIcon className='h-7 text-secondary' />
          </div>
          <div className='flex gap-6'>
            <div className='flex gap-2'>
              <p className=''>Country</p>
              <p className='font-medium'>{country}</p>
            </div>
            <div className='flex gap-2'>
              <p>Age</p>
              <p className='font-medium'>{age}</p>
            </div>
            <div className='flex gap-2'>
              <p>Gender</p>
              <p className='font-medium'>{gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
