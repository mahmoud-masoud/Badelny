import { useState } from 'react';
import useUserContext from './useUserContext';
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import { useChatStore } from '../store/chat';

const useNewMessage = () => {
  const [message, setMessage] = useState('');
  const { selectedUser, addNewMessageToStore } = useChatStore();
  const { user } = useUserContext();

  const getMessage = (e) => {
    setMessage(e.target.value);
  };

  const addNewMessage = (e) => {
    e.preventDefault();

    const checkUserContact = async () => {
      const contactsRef = collection(db, 'messages');

      const q = query(
        contactsRef,
        where('senderId', 'in', [user.uid, selectedUser.id]),
        where('receiverId', 'in', [user.uid, selectedUser.id])
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        const contact = {
          senderId: user.uid,
          senderName: user.displayName,
          senderAvatar: user.photoURL,
          receiverId: selectedUser.id,
          receiverName: selectedUser.name,
          receiverAvatar: selectedUser.avatar,
          lastMessage: message,
          lastTime: serverTimestamp(),
        };

        const colRef = collection(db, 'messages');
        const contactDocRef = await addDoc(colRef, contact);

        const messageList = collection(contactDocRef, 'messageList');

        await addDoc(messageList, {
          addedTime: serverTimestamp(),
          content: message,
          senderId: user.uid,
        });
      } else {
        const q = query(
          contactsRef,
          where('senderId', 'in', [user.uid, selectedUser.id]),
          where('receiverId', 'in', [user.uid, selectedUser.id])
        );

        const querySnapshot = await getDocs(q);
        const contactDocRef = querySnapshot.docs[0].ref;

        const messageListRef = collection(contactDocRef, 'messageList');
        await addDoc(messageListRef, {
          addedTime: serverTimestamp(),
          content: message,
          senderId: user.uid,
        });

        await updateDoc(contactDocRef, {
          lastTime: serverTimestamp(),
          lastMessage: message,
        });
      }
    };

    checkUserContact();

    addNewMessageToStore({
      addedTime: new Date(),
      content: message,
      senderId: user.uid,
    });
    setMessage('');
  };

  return { message, getMessage, addNewMessage };
};
export default useNewMessage;
