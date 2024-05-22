import { useEffect, useState } from 'react';
import useUserContext from './useUserContext';
import {
  collection,
  onSnapshot,
  or,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import { useChatStore } from '../store/chat';

const useUserContacts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userContacts, setUserContacts] = useState([]);
  const { setContacts } = useChatStore();
  const { user } = useUserContext();

  useEffect(() => {
    if (!user) return;

    try {
      const contactsRef = collection(db, 'messages');

      const q = query(
        contactsRef,
        or(
          where('senderId', '==', user.uid),
          where('receiverId', '==', user.uid)
        ),
        orderBy('lastTime', 'desc')
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          const contactsArray = snapshot.docs.map((doc) => doc.data());
          setUserContacts(contactsArray);
          setContacts(contactsArray);
        }
      });

      setLoading(false);
      return () => unsubscribe;
    } catch (error) {
      setLoading(false);
      setError(error.code);
    }
  }, [user, setContacts]);

  return {
    loading,
    error,
    contacts: userContacts,
  };
};
export default useUserContacts;
