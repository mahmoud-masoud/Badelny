import Wrapper from '../../UI/Wrapper';
const Footer = () => {
  return (
    <Wrapper>
      <footer
        className='p-6 md:p-10 bg-secondary text-white text-center relative
       rounded-xl mb-4 mt-10'
      >
        <div>
          <div className='flex flex-col-reverse  md:flex-row gap-10 justify-center items-center mb-10 '>
            <p className='max-w-lg text-slate-100'>
              Have a question or feedback? We'd love to hear from you! Reach out
              to our support team at
              <a
                href='mailto:support@badelny.com'
                className='font-medium text-white text-lg inline-block ml-2'
              >
                support@badelny.com
              </a>
            </p>
            <div className='flex flex-col justify-center items-center gap-4'>
              <span className='text-xl text-white font-semibold'>Badelny</span>
              <img
                src='/icons/logo.svg'
                alt=''
                className='max-w-12 filter brightness-0 invert'
              />
            </div>
          </div>

          <p className=''>
            Made with ❤️ by
            <a
              href='https://imahmoud.me'
              target='_blank'
              className='underline underline-offset-2 font-medium inline-block ml-2'
            >
              Mahmoud Masoud
            </a>
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
