import { motion } from 'framer-motion';
import { useSignupStore } from '../../../store/signup';
import { Controller } from 'react-hook-form';
import Select from './CustomSelectInputs/Select';

const skills = [
  'programming',
  'video editing',
  'marketing',
  'copy writing',
  'design',
];

const variants = {
  inactive: {
    x: '-100%',
    opacity: 0,
  },
  active: {
    x: 0,
    opacity: 1,
  },
  complete: {
    x: '-100%',
    opacity: 0,
  },
};

const FirstStep = ({ register, control, errors }) => {
  const { currentStep, prevStep } = useSignupStore();

  const check = currentStep - prevStep;

  return (
    <motion.div
      custom={check}
      variants={variants}
      initial={check >= 0 ? false : 'inactive'}
      animate='active'
      exit='complete'
      transition={{
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3,
      }}
    >
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-medium text-main-700'>Basic Info</h2>
        <div className='flex flex-col gap-3'>
          <label htmlFor='name' className='text-main-900'>
            name
          </label>
          <input
            autoComplete='off'
            type='text'
            name='name'
            {...register('name')}
            placeholder='Name'
            className='p-2 rounded-md border border-slate-400'
          />
          {errors.name && (
            <div className='text-red-500 text-sm'>{errors.name?.message}</div>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='wantedSkill' className='text-main-900'>
            wanted skill
          </label>
          <Controller
            defaultValue={'select'}
            name='wantedSkill'
            control={control}
            render={({ field }) => <Select field={field} values={skills} />}
          />

          {errors.wantedSkill && (
            <div className='text-red-500 text-sm'>
              {errors.wantedSkill?.message}
            </div>
          )}
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='offeredSkill' className='text-main-900'>
            offered skill
          </label>

          <Controller
            defaultValue={'select'}
            name='offeredSkill'
            control={control}
            render={({ field }) => <Select field={field} values={skills} />}
          />
          {errors.offeredSkill && (
            <div className='text-red-500 text-sm'>
              {errors.offeredSkill?.message}
            </div>
          )}
          {errors?.offeredSkill?.wantedSkill && (
            <div className='text-red-500 text-sm'>
              {errors.offeredSkill?.wantedSkill.message}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
export default FirstStep;
