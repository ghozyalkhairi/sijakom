import MainLayout from "@/components/layout/MainLayout"
import { Box, Center } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Logo from "@/assets/images/png/logo.png"
import LoginForm from "@/components/shared/LoginForm"
import { Link } from "@chakra-ui/next-js"

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>SIJAKOM</title>
        <meta
          name="description"
          content="Sistem Informasi Jadwal Laboratorium Komputer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout notLanding>
        <Box w="100%">
          <Center mt={4}>
            <Link href="/">
              <Image src={Logo} width={150} height={150} alt="Logo" />
            </Link>
          </Center>
        </Box>
        <LoginForm />
      </MainLayout>
    </>
  )
}

export default Login
