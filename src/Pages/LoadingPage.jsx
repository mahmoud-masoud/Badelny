import LoadingSpinner from '../Components/UI/LoadingSpinner';

const LoadingPage = () => {
  return (
    <div className='absolute inset-0 flex justify-center items-center '>
      <LoadingSpinner className={'border-primary border-r-white'} />
    </div>
  );
};
export default LoadingPage;
