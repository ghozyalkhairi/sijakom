import { Box, Center, Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { FC } from "react"
import Image from "next/image"
import Logo from "@/assets/images/png/logo.png"

interface Props {}

const DashboardNav: FC<Props> = () => {
  return (
    <Box w="20%" minH="100vh" shadow="lg" mr={3}>
      <Center mt={4}>
        <Image src={Logo} alt="Logo" width={90} />
      </Center>
      <Box
        mt={4}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
        p={4}
      >
        <Link href="/dashboard">
          <Text fontSize="md">Lab Komputer</Text>
        </Link>
        <Link href="/dashboard/tentang">
          <Text fontSize="md">Tentang</Text>
        </Link>
      </Box>
    </Box>
  )
}

export default DashboardNav
