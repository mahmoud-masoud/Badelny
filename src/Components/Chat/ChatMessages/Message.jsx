import { useMemo } from 'react';
import useUserContext from '../../../Hooks/useUserContext';
import formatTimeDifference from '../../../utils/formateData';

const Message = ({ content, addedTime, senderId }) => {
  const { user } = useUserContext();

  const isCurrentUserSender = useMemo(() => {
    return user.uid === senderId;
  }, [user, senderId]);

  const messageDate = useMemo(() => {
    return formatTimeDifference(addedTime);
  }, [addedTime]);

  return (
    <div className={`flex gap-4 mb-4 ${isCurrentUserSender && 'justify-end'}`}>
      <div
        className={`flex max-w-lg ${
          isCurrentUserSender && 'flex-row-reverse'
        } gap-3`}
      >
        <div
          className={`${
            isCurrentUserSender ? 'text-white' : 'text-black'
          } flex flex-col items-end`}
        >
          <p
            className={`${
              isCurrentUserSender
                ? 'bg-primary rounded-tr-none'
                : 'bg-main-100 rounded-tl-none'
            }  p-3 rounded-xl w-full text-end`}
          >
            {content}
          </p>
          <span className='text-secondary text-sm'>{messageDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
