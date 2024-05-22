import ContactsTopBar from './ContactsTopBar';

import UserContacts from './UserContacts';

const ContactsWrapper = () => {
  return (
    <div className='h-full bg-white border'>
      <ContactsTopBar />
      <UserContacts />
    </div>
  );
};

export default ContactsWrapper;
