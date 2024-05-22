import { motion } from 'framer-motion';
import PasswordInput from '../../UI/PasswordInput';
import Avatars from './Avatars';
import { useSignupStore } from '../../../store/signup';

const variants = {
  inactive: (check) => ({
    x: check >= 0 ? '100%' : '-100%',
  }),
  active: {
    x: 0,
  },
  complete: (check) => ({
    x: check >= 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const ThirdStep = ({ register, setValue, errors }) => {
  const { currentStep, prevStep } = useSignupStore();
  const check = currentStep - prevStep;

  return (
    <motion.div
      custom={check}
      variants={variants}
      initial={'inactive'}
      animate='active'
      exit='complete'
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3,
      }}
    >
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-medium text-main-700'>Create Account</h2>
        <div>
          <p className='block text-slate-800 mb-4'>Choose an avatar</p>
          <Avatars setValue={setValue} />
        </div>
        <div className='flex flex-col gap-3 '>
          <label htmlFor='email' className='text-main-900'>
            email
          </label>
          <input
            autoComplete='email'
            type='email'
            name='email'
            {...register('email')}
            placeholder='email'
            className='py-2 px-4 rounded-md border border-slate-500'
          />
          {errors.email && (
            <div className='text-red-500 text-sm'>{errors.email?.message}</div>
          )}
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='password' className='text-main-900'>
            password
          </label>
          <PasswordInput
            register={register('password')}
            autoComplete='new-password'
          />
          {errors.password && (
            <div className='text-red-500 text-sm'>
              {errors.password?.message}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
export default ThirdStep;
