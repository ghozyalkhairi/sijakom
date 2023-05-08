import DashboardLayout from "@/components/layout/DashboardLayout"
import { NextPage } from "next"
import Head from "next/head"

const Tentang: NextPage = () => {
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
      <DashboardLayout>Tentang</DashboardLayout>
    </>
  )
}

export default Tentang
