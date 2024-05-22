import Wrapper from '../../UI/Wrapper';
import JoinUs from './JoinUs';
const Goal = () => {
  return (
    <Wrapper>
      <section className='py-10 md:py-20 '>
        <div className='flex flex-col-reverse md:flex-row justify-between gap-6'>
          <div className=' md:w-1/2 '>
            <h2
              className='text-3xl md:text-4xl font-bold text-secondary
       mb-8 border-b-2 border-primary pb-4 w-fit'
            >
              Our Goal
            </h2>
            <p className='text-lg leading-10'>
              At Badelny, we're dedicated to accessible learning, building a
              community that fosters growth, empowerment, and mutual support.
              Whether you're a seasoned pro or a curious beginner, Badelny is
              here to help you.
            </p>
          </div>
          <div className=''>
            <img src='/illustration/target.svg' alt='' className='max w-80' />
          </div>
        </div>
      </section>
      <JoinUs />
    </Wrapper>
  );
};

export default Goal;
