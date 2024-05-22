import { useState } from 'react';
import useUserContext from '../../../Hooks/useUserContext';
import Image from '../../UI/Image';
import useUserContacts from '../../../Hooks/useUserContacts';
import { useChatStore } from '../../../store/chat';
import LoadingSkeleton from '../../UI/LoadingSkeleton';

const UserContacts = () => {
  const { setSelectedUser, contacts } = useChatStore();
  const { user } = useUserContext();
  const [activeContact, setActiveContact] = useState(null);

  const { loading } = useUserContacts();

  const activeContactHandler = (contact, idx) => {
    const currentUserIsReceiver = user.uid === contact.receiverId;
    setSelectedUser(
      currentUserIsReceiver
        ? {
            id: contact.senderId,
            name: contact.senderName,
            avatar: contact.senderAvatar,
          }
        : {
            id: contact.receiverId,
            name: contact.receiverName,
            avatar: contact.receiverAvatar,
          }
    );
    setActiveContact(idx);
  };

  if (loading) return <ContactsSkeleton />;

  if (!contacts) return <p className='p-4 py-8 text-lg'>No messages yet.</p>;

  return (
    <div className=''>
      {contacts.map((contact, idx) => {
        const currentUserIsReceiver = user.uid === contact.receiverId;
        return (
          <div
            onClick={() => {
              activeContactHandler(contact, idx);
            }}
            key={idx}
            className={`${
              activeContact === idx
                ? 'bg-slate-100'
                : 'bg-white hover:bg-slate-100'
            } userChat p-3 flex items-center gap-3
             text-navy-700 cursor-pointer  border-b border-slate-200'`}
          >
            <div className='w-10'>
              {currentUserIsReceiver ? (
                <Image avatarUrl={contact.senderAvatar} />
              ) : (
                <Image avatarUrl={contact.receiverAvatar} />
              )}
            </div>

            <div className='userChatInfo'>
              <span className='font-bold'>
                {currentUserIsReceiver
                  ? contact.senderName
                  : contact.receiverName}
              </span>
              <p className='text-slate-600 text-sm'>{contact.lastMessage} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserContacts;

const ContactsSkeleton = () => {
  return (
    <div className='flex flex-col gap-4 px-2 py-4'>
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className='flex gap-4 items-center border-b last:border-b-0 py-2'
          >
            <LoadingSkeleton
              className={'rounded-full h-12 w-12 flex-shrink-0'}
            />
            <div className='w-full flex flex-col gap-2'>
              <LoadingSkeleton className={'h-5 w-1/2 rounded-md'} />
              <LoadingSkeleton className={'h-3.5 w-1/3 rounded-md'} />
            </div>
          </div>
        ))}
    </div>
  );
};
