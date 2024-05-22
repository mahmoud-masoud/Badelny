import Wrapper from '../../UI/Wrapper';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import {
  firstStepSchema,
  secondStepSchema,
  thirdStepSchema,
} from '../../../utils/zod';
import useMultiStepForm from '../../../Hooks/useMultiStepForm';
import useSignup from '../../../Hooks/useSignup';
import { useSignupStore } from '../../../store/signup';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import SuccessStep from './SuccessStep';
import FormButtons from './FormButtons';
import FormStepper from './FormStepper';
import ResizablePanel from './ResizablePanel';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
const validationSchemas = [firstStepSchema, secondStepSchema, thirdStepSchema];

const SignupForm = () => {
  const { currentStep, setCurrentStep, setFormData } = useSignupStore();
  const { isFirst, isLast, next, back } = useMultiStepForm();
  const { createUserAccount, isSuccess, isLoading } = useSignup();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(validationSchemas[currentStep]),
  });

  const onSubmit = async (data) => {
    setFormData(data);
    if (!isLast || isSuccess) {
      next();
    }
    if (isLast) {
      createUserAccount(data);
    }
  };

  useEffect(() => {
    return () => {
      setFormData({});
      setCurrentStep(0);
    };
  }, [setFormData, setCurrentStep]);

  useEffect(() => {
    reset(null, { keepValues: true });
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <FormStepper />
      <Wrapper className={'p-0'}>
        <div className='min-h-screen max-w-2xl p-4 mx-auto overflow-hidden'>
          <div
            className={`p-4 md:p-8 pt-8 md:pt-14 shadow-lg shadow-slate-200 border
           rounded-lg w-full bg-white`}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <ResizablePanel>
                <AnimatePresence mode='wait'>
                  {currentStep === 0 && (
                    <FirstStep
                      register={register}
                      errors={errors}
                      control={control}
                      key={0}
                    />
                  )}
                  {currentStep === 1 && (
                    <SecondStep
                      register={register}
                      errors={errors}
                      control={control}
                      key={1}
                    />
                  )}
                  {currentStep === 2 && (
                    <ThirdStep
                      register={register}
                      setValue={setValue}
                      errors={errors}
                      key={2}
                    />
                  )}
                  {currentStep === 3 && <SuccessStep key={3} />}
                </AnimatePresence>
              </ResizablePanel>
              {currentStep !== 3 && (
                <FormButtons
                  back={back}
                  isFirst={isFirst}
                  isLast={isLast}
                  isLoading={isLoading}
                />
              )}
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default SignupForm;
