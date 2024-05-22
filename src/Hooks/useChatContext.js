import { ChatContext } from '../Context/ChatContext';
import { useContext } from 'react';

const useChatContext = () => {
  const {
    selectedUser,
    setSelectedUser,
    messages,
    setMessages,
    contacts,
    setContacts,
  } = useContext(ChatContext);

  return {
    selectedUser,
    setSelectedUser,
    messages,
    setMessages,
    contacts,
    setContacts,
  };
};

export default useChatContext;
