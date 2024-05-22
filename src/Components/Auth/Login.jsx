import Wrapper from '../UI/Wrapper';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginValidationSchema } from '../../utils/zod';
import PasswordInput from '../UI/PasswordInput';
import { useToastStore } from '../../store/toast';

const Login = () => {
  const { addToast } = useToastStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      addToast(error.code);
    }
  };

  return (
    <Wrapper>
      <div
        className='flex flex-col mx-auto 
         max-w-xl gap-8 my-20 bg-white rounded-lg
         pt-10 p-4 md:p-8 shadow-md shadow-slate-200 border '
      >
        <h2 className='text-xl md:text-2xl font-bold text-main-600'>Login </h2>
        <form autoComplete='off' className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <label htmlFor='email' className='text-main-900 '>
                Email
              </label>
              <input
                autoComplete='off'
                type='email'
                name='email'
                {...register('email')}
                placeholder='email'
                className='p-2 rounded-md border border-slate-400'
              />
              {errors.email && (
                <div className='text-red-500 text-sm'>
                  {errors.email?.message}
                </div>
              )}
            </div>

            <div className='flex flex-col gap-3'>
              <label htmlFor='password' className='text-main-900'>
                Password
              </label>
              <PasswordInput register={register('password')} />

              {errors.password && (
                <div className='text-red-500 text-sm'>
                  {errors.password?.message}
                </div>
              )}
            </div>
            <button
              className={`bg-primary px-4 py-2 font-bold hover:bg-main-600 text-white mt-4 rounded-lg`}
            >
              {isSubmitting ? <LoadingSpinner /> : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
