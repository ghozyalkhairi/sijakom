import { Box, Text } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import Navbar from "./Navbar"
import Image from "next/image"
import UMPImage from "@/assets/images/jpg/ump.jpg"

interface Props {
  children: ReactNode
  notLanding?: boolean
}

const MainLayout: FC<Props> = ({ children, notLanding }) => {
  return (
    <Box w="100%" h="100%">
      <Box w="100%" p={4}>
        {!notLanding && <Navbar />}
        {children}
      </Box>
      {!notLanding && (
        <Box w="100%" mt={2}>
          <Image src={UMPImage} alt="UMP" />
        </Box>
      )}
      <Box w="100%" mt={2} p={4} bg="brand.primary" color="brand.white">
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
