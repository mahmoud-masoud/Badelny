import { motion } from 'framer-motion';
import { countries } from '../../../utils/zod';
import { useSignupStore } from '../../../store/signup';
import CountrySelect from './CustomSelectInputs/CountrySelect';
import { Controller } from 'react-hook-form';
import Select from './CustomSelectInputs/Select';

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

const SecondStep = ({ register, control, errors }) => {
  const { currentStep, prevStep } = useSignupStore();

  const check = currentStep - prevStep;

  return (
    <motion.div
      custom={check}
      variants={variants}
      initial='inactive'
      animate='active'
      exit='complete'
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3,
      }}
    >
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-medium text-main-700'>Additional Info</h2>
        <div className='flex flex-col gap-3'>
          <label htmlFor='' className='text-main-900'>
            country
          </label>

          <Controller
            name='country'
            control={control}
            render={({ field }) => (
              <CountrySelect field={field} countries={countries} />
            )}
          />

          {errors.country && (
            <div className='text-red-500 text-sm'>
              {errors.country?.message}
            </div>
          )}
        </div>

        <div className='flex flex-col gap-3'>
          <label htmlFor='phone' className='text-main-900'>
            phone
          </label>
          <input
            type='text'
            {...register('phone')}
            placeholder='01234567489'
            className='p-2 border border-slate-500 rounded-md'
          />

          {errors.phone && (
            <div className='text-red-500 text-sm'>{errors.phone?.message}</div>
          )}
        </div>

        <div className='flex gap-4 '>
          <div className='flex flex-col gap-3 w-1/2'>
            <label htmlFor='' className='text-main-900'>
              gender
            </label>
            <Controller
              defaultValue={'select'}
              name='gender'
              control={control}
              render={({ field }) => (
                <Select field={field} values={['male', 'female']} />
              )}
            />

            {errors.gender && (
              <div className='text-red-500 text-sm'>
                {errors.gender?.message}
              </div>
            )}
          </div>

          <div className='flex flex-col gap-3 w-1/2'>
            <label htmlFor='' className='text-main-900'>
              age
            </label>

            <input
              type='number'
              name='age'
              placeholder='18'
              {...register('age', { valueAsNumber: true })}
              className='px-4 py-2 border border-slate-500 rounded-md'
            />

            {errors.age && (
              <div className='text-red-500 text-sm'>{errors.age?.message}</div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default SecondStep;
