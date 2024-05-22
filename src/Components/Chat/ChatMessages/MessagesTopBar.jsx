import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useChatStore } from '../../../store/chat';

const MessagesTopBar = () => {
  const { selectedUser, setSelectedUser } = useChatStore();

  const closeChat = () => {
    setSelectedUser(null);
  };

  return (
    <div className='bg-light p-4 flex justify-between'>
      <div className='flex items-center gap-4'>
        <button onClick={closeChat} className='md:hidden'>
          <ArrowLeftIcon
            className='text-secondary rounded-full
     hover:bg-slate-50/60 h-9 p-1.5 stroke-[2.2px] '
          />
        </button>

        <div className='w-10'>
          {selectedUser.avatar ? (
            <img
              src={selectedUser.avatar}
              alt='user photo'
              className='rounded-full max-w-full'
            />
          ) : (
            <UserCircleIcon className='text-main-700 max-w-full rounded-full' />
          )}
        </div>

        <span className='font-bold text-lg text-secondary'>
          {selectedUser && selectedUser.name}
        </span>
      </div>
    </div>
  );
};
export default MessagesTopBar;
