import { Link } from 'react-router-dom';
import Wrapper from '../../UI/Wrapper';

const HeroSection = () => {
  return (
    <section className='pt-10 md:pt-20'>
      <Wrapper>
        <div className='bg-hero bg-center bg-cover bg-no-repeat  rounded-3xl h-[80vh] relative overflow-hidden'>
          <div
            className='h-full w-full bg-secondary/70  text-center flex justify-center items-center flex-col
           text-white'
          >
            <div className='flex flex-col justify-center items-center px-4 max-w-3xl'>
              <h1 className='font-bold text-4xl md:text-5xl text-white mb-10'>
                Discover others' skills and showcase yours.
              </h1>
              <p className='md:text-xl font-medium'>
                Got a skill? Share it! Want to learn one? Swap on Badelny.
                Marketing, coding, design - anything goes!
              </p>
              <Link
                to={'/signup'}
                className='block w-fit mt-10 md:mt-20 bg-white font-bold
                 text-main-800 hover:bg-slate-100
             rounded py-2 px-8 md:py-3 md:px-12 text-xl md:text-2xl
              shadow-CTA border border-dark'
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default HeroSection;
