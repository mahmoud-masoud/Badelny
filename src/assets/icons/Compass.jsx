const Compass = () => {
  return (
    <svg
      className='fill-secondary stroke-secondary w-9 md:w-11 flex-1 '
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m448 256c0-106-86-192-192-192s-192 86-192 192 86 192 192 192 192-86 192-192z'
        fill='none'
        strokeWidth='20'
      />
      <path d='m350.67 150.93-117.2 46.88a64 64 0 0 0 -35.66 35.66l-46.88 117.2a8 8 0 0 0 10.4 10.4l117.2-46.88a64 64 0 0 0 35.66-35.66l46.88-117.2a8 8 0 0 0 -10.4-10.4zm-94.67 129.07a24 24 0 1 1 24-24 24 24 0 0 1 -24 24z' />
    </svg>
  );
};
export default Compass;

export const CompassSolid = () => {
  return (
    <svg
      className='fill-secondary stroke-secondary w-9 md:w-11 flex-1 '
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='256' cy='256' r='24' />
      <path d='m256 48c-114.69 0-208 93.31-208 208s93.31 208 208 208 208-93.31 208-208-93.31-208-208-208zm105.07 113.33-46.88 117.2a64 64 0 0 1 -35.66 35.66l-117.2 46.88a8 8 0 0 1 -10.4-10.4l46.88-117.2a64 64 0 0 1 35.66-35.66l117.2-46.88a8 8 0 0 1 10.4 10.4z' />
    </svg>
  );
};
