import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SignupForm from '../Components/Auth/signup/SignupForm';

const SignupPage = () => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div className=''>
      <nav className='py-4 px-2 bg-white shadow-md shadow-slate-200 sticky top-0 z-50 '>
        <div className='max-w-screen-xl mx-auto flex justify-between'>
          <Link to={'/'}>
            <div className='flex justify-center items-center gap-2'>
              <img src='/icons/logo.svg' alt='' className='w-10' />
              <h2 className='text-main-600 text-xl font-bold'>Badelny</h2>
            </div>
          </Link>
          <div className=' flex gap-2 items-center justify-center'>
            <span className='hidden md:inline-block'>
              Already have an account?
            </span>
            <Link
              to={'/login'}
              className='text-primary hover:underline text-lg'
            >
              Sign in
            </Link>
          </div>
        </div>
      </nav>
      <SignupForm />
    </div>
  );
};
export default SignupPage;
