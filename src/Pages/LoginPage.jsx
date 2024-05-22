import { Link } from 'react-router-dom';
import Login from '../Components/Auth/Login';

const LoginPage = () => {
  return (
    <div>
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
              Don't have an account?
            </span>
            <Link
              to={'/signup'}
              className='text-primary hover:underline text-lg'
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
      <Login />
    </div>
  );
};
export default LoginPage;
