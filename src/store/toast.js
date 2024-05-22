import { create } from 'zustand';

export const useToastStore = create((set) => ({
  message: null,
  addToast: (message) => set({ message }),
  removeToast: () => set({ message: null }),
}));
