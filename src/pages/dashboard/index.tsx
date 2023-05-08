import DashboardLayout from "@/components/layout/DashboardLayout"
import MainCard from "@/components/shared/MainCard"
import { NextPage } from "next"

const Dashboard: NextPage = () => {
  return (
    <DashboardLayout>
      <MainCard isAuth />
    </DashboardLayout>
  )
}

export default Dashboard
