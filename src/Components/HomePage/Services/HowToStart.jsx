import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  UserPlusIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';
import StepCard from './StepCard';

const HowToStart = () => {
  return (
    <section className='py-10 md:py-20'>
      <h2
        className='text-3xl md:text-4xl font-bold text-secondary mb-10 border-b-2 pb-2
             border-primary w-fit'
      >
        How It Works
      </h2>
      <div className=' grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3  justify-center gap-10'>
        <StepCard
          icon={<UserPlusIcon className='w-7 h-7 text-secondary' />}
          title={'Sign Up'}
          content={`Join our community of learners and educators with just a few clicks.
            Share what you excel at and what you're eager to learn.
            `}
        />
        <StepCard
          icon={<MagnifyingGlassIcon className='w-7 h-7 text-secondary' />}
          title={'Find Matches'}
          content={
            'Explore a diverse range of skills offered by others and connect with your perfect match.'
          }
        />
        <StepCard
          icon={<ChatBubbleLeftRightIcon className='w-7 h-7 text-secondary' />}
          title={'Start Swapping'}
          content={'Exchange knowledge, learn new things, and grow together.'}
        />
      </div>
    </section>
  );
};
export default HowToStart;
