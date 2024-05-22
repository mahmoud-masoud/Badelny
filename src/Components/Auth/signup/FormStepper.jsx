import { useSignupStore } from '../../../store/signup';
import Step from './Step';

const FormStepper = () => {
  const { currentStep } = useSignupStore();
  return (
    <div className=' bg-main-50/40 w-full'>
      <div
        className='flex items-center justify-center mx-auto w-full text-xs text-gray-900
 font-medium sm:text-base max-w-3xl py-8 pb-10 md:py-12 md:pb-14 px-4'
      >
        <Step step={0} currentStep={currentStep} />
        <Step step={1} currentStep={currentStep} />
        <Step step={2} currentStep={currentStep} />
      </div>
    </div>
  );
};
export default FormStepper;
