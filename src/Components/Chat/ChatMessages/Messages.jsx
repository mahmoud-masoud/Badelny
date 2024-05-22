import Message from './Message';
import useContactMessages from '../../../Hooks/useContactMessages';
import useScrollToBottom from '../../../Hooks/useScrollToBottom';
import LoadingSkeleton from '../../UI/LoadingSkeleton';

const Messages = () => {
  const { loading, messages } = useContactMessages();
  const ref = useScrollToBottom();

  if (loading) return <MessagesSkeleton />;
  return (
    <div ref={ref} className='h-full overflow-y-scroll flex-1'>
      <div className='text-white p-2 py-4 md:p-6 min-h-full'>
        {messages.map((msg, idx) => (
          <Message
            key={idx}
            content={msg.content}
            addedTime={msg.addedTime}
            senderId={msg.senderId}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;

const MessagesSkeleton = () => {
  return (
    <div className='h-full'>
      <div className='flex items-end flex-col gap-4 px-2 py-4'>
        <LoadingSkeleton className={'h-10 w-28 rounded-lg'} />
        <LoadingSkeleton className={'h-10 w-1/3 rounded-lg'} />
      </div>
      <div className='flex flex-col gap-4 px-2 py-4'>
        <LoadingSkeleton className={'h-10 w-36 rounded-lg'} />
        <LoadingSkeleton className={'h-10 w-20 rounded-lg'} />
      </div>

      <div className='flex items-end flex-col gap-4 px-2 py-4'>
        <LoadingSkeleton className={'h-10 w-28 rounded-lg'} />
        <LoadingSkeleton className={'h-10 w-1/2 rounded-lg'} />
        <LoadingSkeleton className={'h-10 w-20 rounded-lg'} />
      </div>
    </div>
  );
};
