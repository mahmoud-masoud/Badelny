const NotConnectPage = () => {
  return (
    <section className='flex flex-col justify-center items-center min-h-screen p-4 text-center'>
      <div className=''>
        <img
          src='/illustration/no-connection.svg'
          alt='no connection photo'
          className='max-w-full'
        />
      </div>

      <p className='text-slate-700 font-medium mb-6'>
        No internet connection. Please check your network settings.
      </p>
      <button
        onClick={() => {
          window.location.reload();
        }}
        className='bg-primary hover:bg-main-600 duration-150 
      py-2 px-4 rounded text-white font-medium'
      >
        retry
      </button>
    </section>
  );
};
export default NotConnectPage;
