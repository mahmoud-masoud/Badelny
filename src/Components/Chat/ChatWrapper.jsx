import MessagesWrapper from './ChatMessages/MessagesWrapper';
import useScreenWidth from '../../Hooks/useScreenWidth';
import { useChatStore } from '../../store/chat';
import ContactsWrapper from './ChatContacts/ContactsWrapper';
import useUserContacts from '../../Hooks/useUserContacts';

const ChatWrapper = () => {
  const { selectedUser } = useChatStore();

  const { contacts } = useUserContacts();

  const isMobile = useScreenWidth();

  return (
    <div
      style={{ height: 'calc(100vh - 200px)' }}
      className='max-h-screen my-12 flex overflow-hidden'
    >
      {((isMobile && !selectedUser && contacts) || !isMobile) && (
        <div className='w-full md:w-1/3 h-full'>
          <ContactsWrapper />
        </div>
      )}
      {((isMobile && selectedUser) || !isMobile || !contacts) && (
        <div className='w-2/3 flex flex-col flex-1 relative border bg-slate-50'>
          <MessagesWrapper />
        </div>
      )}
    </div>
  );
};
export default ChatWrapper;
