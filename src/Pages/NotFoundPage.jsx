import { Link } from 'react-router-dom';
import Wrapper from '../Components/UI/Wrapper';

const NotFoundPage = () => {
  return (
    <Wrapper className={' flex items-center flex-col py-10'}>
      <div>
        <img src='/illustration/404.svg' alt='not found image' />
      </div>
      <p className='text-xl font-medium text-slate-700 mb-8'>
        Oops! Page not found.
      </p>
      <Link
        className='px-4 py-2 bg-primary rounded text-white
       font-medium hover:bg-main-600 duration-150'
      >
        Home
      </Link>
    </Wrapper>
  );
};
export default NotFoundPage;
