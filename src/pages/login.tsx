import MainLayout from "@/components/layout/MainLayout"
import { Text, Box, Center } from "@chakra-ui/react"
import { NextPage } from "next"
import Image from "next/image"
import Logo from "@/assets/images/png/logo.png"
import LoginForm from "@/components/shared/LoginForm"

const Login: NextPage = () => {
  return (
    <MainLayout notLanding>
      <Box w="100%">
        <Center>
          <Image src={Logo} width={200} height={200} alt="Logo" />
        </Center>
      </Box>
      <LoginForm />
    </MainLayout>
  )
}

export default Login
