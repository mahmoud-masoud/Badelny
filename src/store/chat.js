import { create } from 'zustand';

export const useChatStore = create((set) => ({
  selectedUser: null,
  messages: [],
  contacts: [],
  setSelectedUser: (selectedUser) => set({ selectedUser: selectedUser }),
  addNewMessageToStore: (newMessage) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
  setMessages: (historyMessages) => set({ messages: historyMessages }),
  setContacts: (userContacts) => set({ contacts: userContacts }),
}));
