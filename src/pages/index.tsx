import Head from "next/head"
import { Center, Spinner, Text, Box } from "@chakra-ui/react"
import MainLayout from "@/components/layout/MainLayout"
import MainCard from "@/components/shared/MainCard"
import { useEffect, useState } from "react"
import { getRuangLab } from "@/lib/ruangLab"

export default function Home() {
  const [loadingRuangLab, setLoadingRuangLab] = useState(true)
  const [listRuangLab, setListRuangLab] = useState([])
  useEffect(() => {
    setLoadingRuangLab(true)
    const getListRuangLab = async () => {
      const data = await getRuangLab()
      setListRuangLab(data.data)
      setLoadingRuangLab(false)
    }
    getListRuangLab()
  }, [])
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
          {loadingRuangLab ? (
            <Box w="100%" bg="brand.primary" p={4} mt={4} borderRadius="lg">
              <Center>
                <Spinner scale={1.5} color="brand.white" />
              </Center>
            </Box>
          ) : (
            <MainCard listRuangLab={listRuangLab} />
          )}
        </MainLayout>
      </main>
    </>
  )
}
