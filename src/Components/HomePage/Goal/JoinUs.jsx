import { Link } from 'react-router-dom';

const JoinUs = () => {
  return (
    <section className='py-10'>
      <h2
        className='text-xl md:text-2xl font-bold text-secondary
       mb-2 w-fit'
      >
        Join Badelny Today
      </h2>

      <div className='flex gap-4 max-sm:items-center justify-between'>
        <p className='mt-4 text-lg'>
          Ready to embark on your learning journey? Start now and experience the
          joy of skill exchange.
        </p>

        <Link
          to={'/login'}
          className='bg-primary text-white font-medium p-3 block
           w-fit h-fit text-nowrap hover:bg-main-600 duration-200'
        >
          Join Now
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
