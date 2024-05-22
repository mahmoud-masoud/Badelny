import { useSignupStore } from '../store/signup';

const steps = [0, 1, 2];

const useMultiStepForm = () => {
  const { currentStep, setCurrentStep, setPrevStep } = useSignupStore();

  const next = () => {
    if (currentStep <= steps.length) {
      setPrevStep(currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  const back = () => {
    if (currentStep >= 1) {
      setPrevStep(currentStep);
      setCurrentStep(currentStep - 1);
    }
  };

  return {
    isFirst: currentStep === 0,
    isLast: currentStep === steps.length - 1,
    next,
    back,
  };
};
export default useMultiStepForm;
