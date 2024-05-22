const NoResults = () => {
  return (
    <section className='flex flex-col justify-center items-center p-4 text-center'>
      <div className=''>
        <img
          src='/illustration/no-result.svg'
          alt='no connection photo'
          className='max-w-full'
        />
      </div>

      <p className='text-slate-700 font-medium'>
        No results! Double-check spelling or try another skill.
      </p>
    </section>
  );
};
export default NoResults;
