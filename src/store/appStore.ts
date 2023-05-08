import { create } from "zustand"

interface AppState {
  reload: boolean
  actions: {
    setReload: () => void
  }
}

const useAppStore = create<AppState>((set, get) => ({
  reload: false,
  actions: {
    setReload: () => set({ reload: !get().reload }),
  },
}))

export const useAppReload = () => useAppStore((state) => state.reload)
export const useAppActions = () => useAppStore((state) => state.actions)
