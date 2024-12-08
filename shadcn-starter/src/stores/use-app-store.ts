// @/stores/use-app-store.ts

import { create } from 'zustand';

type AppStore = {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  isMobile: false,
  setIsMobile: (isMobile) => set({ isMobile }),
}));
