import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@/theme"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}
