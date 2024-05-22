import { Link } from 'react-router-dom';
import { useChatStore } from '../../../store/chat';

const EmptyMessages = () => {
  const { contacts } = useChatStore();
  return (
    <div className='h-full w-full bg-slate-50 flex flex-col items-center justify-center'>
      <div className='h-40 w-40'>
        <img src='/icons/messages.svg' alt='' className='max-h-full' />
      </div>
      <div className='font-medium mt-2 text-center'>
        {contacts ? (
          <p>Choose from past chats or find someone new.</p>
        ) : (
          <div className='text-center'>
            <p className='inline-block'>
              Easily connect by searching or from here
            </p>
            <Link to={'/explore'} className='text-primary mx-1'>
              Explore
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default EmptyMessages;
