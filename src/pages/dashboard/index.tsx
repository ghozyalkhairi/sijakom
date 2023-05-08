import DashboardLayout from "@/components/layout/DashboardLayout"
import MainCard from "@/components/shared/MainCard"
import { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import { getRuangLab } from "@/lib/ruangLab"
import { Box, Center, Spinner } from "@chakra-ui/react"
import { useAppReload } from "@/store/appStore"

const Dashboard: NextPage = () => {
  const [loadingRuangLab, setLoadingRuangLab] = useState(true)
  const [listRuangLab, setListRuangLab] = useState([])
  const reload = useAppReload()

  useEffect(() => {
    setLoadingRuangLab(true)
    const getListRuangLab = async () => {
      const data = await getRuangLab()
      setListRuangLab(data.data)
      setLoadingRuangLab(false)
    }
    getListRuangLab()
  }, [reload])
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
      <DashboardLayout>
        {loadingRuangLab ? (
          <Box w="100%" bg="brand.primary" p={8} mt={4} borderRadius="lg">
            <Center>
              <Spinner size="lg" color="brand.white" />
            </Center>
          </Box>
        ) : (
          <MainCard isAuth listRuangLab={listRuangLab} />
        )}
      </DashboardLayout>
    </>
  )
}

export default Dashboard
