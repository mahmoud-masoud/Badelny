import { createContext, useState } from 'react';

export const ChatContext = createContext({
  selectedUser: null,
  setSelectedUser: () => {},
  messages: [],
  setMessages: () => {},
  contacts: [],
  setContacts: () => {},
});
const ChatContextProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <ChatContext.Provider
      value={{
        selectedUser,
        setSelectedUser,
        messages,
        setMessages,
        contacts,
        setContacts,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
