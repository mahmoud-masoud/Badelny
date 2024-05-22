const StepCard = ({ content, icon, title }) => {
  return (
    <div
      className='flex flex-col justify-center items-center
     shadow-md rounded-xl p-10 py-10 text-center gap-6 shadow-indigo-100 border border-indigo-50'
    >
      <div className='bg-main-50 rounded-full p-6'>{icon}</div>
      <p className='text-secondary font-medium text-lg'>{title}</p>
      <p className='text-main-900'>{content}</p>
    </div>
  );
};
export default StepCard;
