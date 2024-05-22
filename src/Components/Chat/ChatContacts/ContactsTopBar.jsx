import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const ContactsTopBar = () => {
  return (
    <div className='bg-secondary p-6 text-white flex  items-center justify-between '>
      <span className=''>Badelny</span>
      <MagnifyingGlassIcon className='h-7' />
    </div>
  );
};

export default ContactsTopBar;
