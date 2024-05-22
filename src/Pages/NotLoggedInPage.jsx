import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotLoggedInPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='py-20 flex justify-center items-center 
    flex-col gap-6'
    >
      <div className='w-60 h-60 md:h-72 md:w-72 p-10 flex justify-center items-center max-w-full bg-main-50 rounded-full'>
        <img
          src='/icons/anymous.svg'
          alt='empty user'
          className='max-w-full max-h-full'
        />
      </div>
      <h1 className='text-xl font-medium text-slate-700 mb-2'>
        You're not logged in
      </h1>
      <div className='flex gap-8 justify-between items-center'>
        <Link
          to={'/signup'}
          className='bg-primary hover:bg-main-600 duration-150
           rounded-md px-4 py-2 text-white'
        >
          Sign up
        </Link>
        <Link
          to={'/login'}
          className='border-main-600 border hover:bg-main-50 
          duration-150 rounded-md px-4 py-2 text-dark'
        >
          Login
        </Link>
      </div>
    </motion.div>
  );
};
export default NotLoggedInPage;
