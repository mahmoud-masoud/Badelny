import { XMarkIcon } from '@heroicons/react/24/outline';
import { useToastStore } from '../../store/toast';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
const Toast = () => {
  const { message, removeToast } = useToastStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeToast();
    }, 2500);
    return () => clearTimeout(timeout);
  }, [message, removeToast]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            type: 'tween',
            duration: 0.2,
            ease: 'easeInOut',
          }}
          className='py-3 px-4 bg-rose-500 text-white font-medium rounded fixed bottom-10 right-10 
    flex gap-2 items-center justify-center
    '
        >
          <p>{message}</p>
          <button
            type='button'
            onClick={() => removeToast()}
            className='hover:bg-white/20 rounded-full p-0.5 '
          >
            <XMarkIcon className='h-5 w-5 stroke-2' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Toast;
