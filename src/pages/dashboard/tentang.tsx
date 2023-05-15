import DashboardLayout from "@/components/layout/DashboardLayout"
import { NextPage } from "next"
import Head from "next/head"
import { useAuthIsLoggedIn } from "@/store/authStore"
import { useRouter } from "next/router"
import { useEffect } from "react"
import AboutCard from "@/components/shared/AboutCard"

const Tentang: NextPage = () => {
  const isLoggedIn = useAuthIsLoggedIn()

  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [isLoggedIn])

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
        <AboutCard />
      </DashboardLayout>
    </>
  )
}

export default Tentang
