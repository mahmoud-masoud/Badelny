import Wrapper from '../../UI/Wrapper';
const WhyUs = () => {
  return (
    <Wrapper>
      <section className='pb-10 md:pb-20'>
        <div className='container'>
          <div className='flex flex-col md:flex-row md:items-center justify-between'>
            <h2
              className='text-3xl md:text-4xl font-bold text-secondary mb-8
            w-fit'
            >
              Why Badelny
              <span className='text-4xl md:text-5xl ml-2'>?</span>
            </h2>

            <div className='flex gap-4 md:gap-8'>
              <Stepper />
              <div className='flex flex-col gap-6 md:gap-10'>
                <Feature
                  number={1}
                  content={
                    "From coding to cooking, gardening to graphic design, there's no limit to what you can learn."
                  }
                />
                <Feature
                  number={2}
                  content={
                    'Your expertise is valuable. Share it with the world and empower others to grow.'
                  }
                />
                <Feature
                  number={3}
                  content={
                    'Meet like-minded individuals who are as passionate about learning as you are.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default WhyUs;

const Feature = ({ content }) => {
  return (
    <div className='flex gap-8 items-center w-full'>
      <p className='px-4 py-6 bg-slate-100 rounded flex-1'>{content}</p>
    </div>
  );
};

const Stepper = () => {
  return (
    <div className='flex flex-col justify-between'>
      {Array(3)
        .fill(null)
        .map((_, index) => {
          return (
            <div
              key={index}
              className={`${
                index !== 2 && 'h-full flex flex-col items-center'
              }`}
            >
              <div
                className='h-9 w-9 md:h-10 md:w-10 bg-main-400 rounded-full flex
   justify-center items-center font-medium md:text-lg text-white'
              >
                {index + 1}
              </div>
              <div className=' bg-main-400 flex-1 w-0.5'></div>
            </div>
          );
        })}
    </div>
  );
};
