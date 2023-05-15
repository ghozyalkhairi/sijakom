import { create } from "zustand"

interface AuthState {
  userName: string
  isLoggedIn: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string
  actions: {
    onLogin: (userName: string, password: string) => void
    resetAuthState: () => void
  }
}

const useAuthStore = create<AuthState>((set, get) => ({
  userName: "",
  isLoggedIn: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  actions: {
    onLogin: (userName: string, password: string) => {
      const trueUserName = userName === process.env.NEXT_PUBLIC_LAB_USERNAME
      const truePassword = password === process.env.NEXT_PUBLIC_LAB_PASSWORD

      if (trueUserName && truePassword) {
        set({
          userName,
          isLoggedIn: true,
          isSuccess: true,
          isError: false,
          errorMessage: "",
        })
      }

      if (!trueUserName || !truePassword) {
        set({
          userName: "",
          isLoggedIn: false,
          isSuccess: false,
          isError: true,
          errorMessage: "Username atau password salah",
        })
      }
    },
    resetAuthState: () => {
      set({
        userName: "",
        isLoggedIn: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
      })
    },
  },
}))

export const useAuthUserName = () => useAuthStore((state) => state.userName)
export const useAuthIsLoggedIn = () => useAuthStore((state) => state.isLoggedIn)
export const useAuthIsSuccess = () => useAuthStore((state) => state.isSuccess)
export const useAuthIsError = () => useAuthStore((state) => state.isError)
export const useAuthErrorMessage = () =>
  useAuthStore((state) => state.errorMessage)
export const useAuthActions = () => useAuthStore((state) => state.actions)
