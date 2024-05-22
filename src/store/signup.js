import { create } from 'zustand';

export const useSignupStore = create((set) => ({
  currentStep: 0,
  prevStep: 0,
  formData: {},
  setCurrentStep: (step) => set({ currentStep: step }),
  setPrevStep: (step) => set({ prevStep: step }),
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
}));
