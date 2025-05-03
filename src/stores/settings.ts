import { TSettings } from "@/types/settings";
import { create } from "zustand";

type SettingsStore = {
   settings?: TSettings
   setSettings(currency: TSettings): void
}

export const useSettingsStore = create<SettingsStore>((set) => ({
   settings: {
      theme: 'voidcraftmc',
      colors: {
         primary: '#8a2be2', // Purple
         secondary: '#ff69b4', // Pink
         accent: '#ff4500' // Red
      }
   },
   setSettings: (settings) => set({ settings })
}));
