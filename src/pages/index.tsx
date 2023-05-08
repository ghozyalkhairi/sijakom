import Head from "next/head"
import { Text } from "@chakra-ui/react"
import MainLayout from "@/components/layout/MainLayout"
import MainCard from "@/components/shared/MainCard"

export default function Home() {
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
      <main>
        <MainLayout>
          <Text
            as="h1"
            fontSize="2xl"
            fontWeight="bold"
            mt={6}
            textAlign="center"
          >
            Sistem Informasi Jadwal Laboratorium Komputer
          </Text>
          <MainCard />
        </MainLayout>
      </main>
    </>
  )
}
