import { Link } from 'react-router-dom';

const SuccessStep = () => {
  return (
    <div className='rounded-md flex flex-col gap-5'>
      <h2 className='text-xl font-medium text-main-700 mb-5'>
        Account Created
      </h2>
      <p>Account created successfully 🎉🎉</p>
      <Link
        to={'/'}
        className='px-6 py-2 bg-primary rounded block w-fit hover:bg-main-600 duration-150
  font-medium text-white'
      >
        Home
      </Link>
    </div>
  );
};
export default SuccessStep;
