import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../utils/firebaseConfig';
import useUserContext from './useUserContext';
import { useChatStore } from '../store/chat';

const useContactMessages = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messages, setContactMessages] = useState([]);

  const { user } = useUserContext();
  const { selectedUser, setMessages } = useChatStore();

  useEffect(() => {
    if (!user || !selectedUser) return;

    const getContactMessages = async () => {
      const contactsRef = collection(db, 'messages');

      const q = query(
        contactsRef,
        where('senderId', 'in', [user.uid, selectedUser.id]),
        where('receiverId', 'in', [user.uid, selectedUser.id])
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const contactDocRef = querySnapshot.docs[0].ref;
        const messageList = collection(contactDocRef, 'messageList');

        const orderedMessagesQuery = query(
          messageList,
          orderBy('addedTime', 'asc')
        );

        // Subscribe to real-time updates
        const unsubscribe = onSnapshot(orderedMessagesQuery, (snapshot) => {
          const contactHistory = snapshot.docs.map((doc) => doc.data());
          setMessages(contactHistory);
          setContactMessages(contactHistory);
        });
        setLoading(false);
        return unsubscribe;
      }
      setLoading(false);
    };

    try {
      getContactMessages();
    } catch (error) {
      setError(error.code);
      setLoading(false);
    }

    return () => {
      setMessages([]);
    };
  }, [selectedUser, user, setMessages]);

  return { loading, error, messages };
};
export default useContactMessages;
