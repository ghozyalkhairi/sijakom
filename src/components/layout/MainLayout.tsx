import { Box, Text } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import Navbar from "./Navbar"
import Image from "next/image"
import UMPImage from "@/assets/images/jpg/ump.jpg"

interface Props {
  children: ReactNode
  notLanding?: boolean
  loadingRuangLab: boolean
}

const MainLayout: FC<Props> = ({ children, notLanding, loadingRuangLab }) => {
  return (
    <Box w="100%" minH="100vh" display="flex" flexDir="column">
      <Box w="100%" p={4}>
        {!notLanding && <Navbar />}
        {children}
      </Box>
      {!notLanding && !loadingRuangLab && (
        <Box w="100%" mt={2}>
          <Image src={UMPImage} alt="UMP" />
        </Box>
      )}
      <Box w="100%" mt="auto" p={4} bg="brand.primary" color="brand.white">
        <Text as="p" fontSize="sm" textAlign="center">
          © 2023 Sistem Informasi Jadwal Laboratorium Komputer
        </Text>
        <Text as="p" fontSize="sm" textAlign="center">
          Made with ❤️ by Ghozy Alkhairi
        </Text>
      </Box>
    </Box>
  )
}

export default MainLayout
