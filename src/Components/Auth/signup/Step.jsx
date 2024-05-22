import { motion } from 'framer-motion';

const variants = {
  inactive: {
    backgroundColor: 'var(--white)',
    borderColor: 'var(--slate-200)',
    color: 'var(--slate-400)',
  },
  active: {
    backgroundColor: 'var(--white)',
    borderColor: 'var(--primary)',
    color: 'var(--primary)',
  },
  complete: {
    backgroundColor: 'var(--primary)',
    borderColor: 'var(--primary)',
    color: 'var(--white)',
  },
};

const Step = ({ step, currentStep }) => {
  let status =
    currentStep === step
      ? 'active'
      : currentStep > step
      ? 'complete'
      : 'inactive';

  return (
    <div className={`${step !== 2 && 'w-full'} flex items-center`}>
      <motion.div
        variants={variants}
        initial={false}
        animate={status}
        className='w-8 h-8 md:w-10 md:h-10 border-2 bg-white
          rounded-full flex justify-center items-center shrink-0
         '
      >
        {status === 'complete' ? <CheckIcon /> : step + 1}
      </motion.div>

      <div className='flex justify-center items-center w-full h-1 '>
        <div className='relative bg-slate-200 rounded-full h-[3px] w-[70%]'>
          <motion.div
            initial={false}
            animate={status}
            variants={{
              inactive: {
                backgroundColor: 'var(--white)',
                width: 0,
              },
              active: {
                backgroundColor: 'var(--slate-200)',
                width: 0,
              },
              complete: {
                backgroundColor: 'var(--primary)',
                width: '100%',
              },
            }}
            className='bg-primary h-[3px] w-full rounded-full'
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
export default Step;

const CheckIcon = () => {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
      className='h-6 md:h-8'
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.2,
          type: 'tween',
          ease: 'easeOut',
          duration: 0.3,
        }}
        d='M5 13l4 4L19 7'
      />
    </svg>
  );
};
