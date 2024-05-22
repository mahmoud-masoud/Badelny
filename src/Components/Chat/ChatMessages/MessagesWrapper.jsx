import Messages from './Messages';
import MessageInput from './MessageInput';
import EmptyMessages from './EmptyMessages';
import MessagesTopBar from './MessagesTopBar';
import { useChatStore } from '../../../store/chat';

const MessagesWrapper = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className='flex flex-col h-full'>
      {selectedUser ? (
        <>
          <MessagesTopBar />
          <Messages />
          <MessageInput />
        </>
      ) : (
        <EmptyMessages />
      )}
    </div>
  );
};

export default MessagesWrapper;
