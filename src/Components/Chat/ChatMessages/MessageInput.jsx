import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import useNewMessage from '../../../Hooks/useNewMessage';

const MessageInput = () => {
  const { message, getMessage, addNewMessage } = useNewMessage();

  return (
    <form className=' w-full' onSubmit={addNewMessage}>
      <div className='p-2 flex gap-4'>
        <input
          onChange={getMessage}
          type='text'
          value={message}
          placeholder='message...'
          className='p-3 border border-slate-300 flex-1 outline-0 rounded-lg overflow-hidden'
        />

        <button
          disabled={message.trim() === ''}
          className='disabled:bg-slate-300 disabled:cursor-not-allowed border-none px-5 py-1.5
           text-white bg-primary rounded-lg'
        >
          <PaperAirplaneIcon className='h-6' />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
