import { Box, Center, Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { FC } from "react"
import Image from "next/image"
import Logo from "@/assets/images/png/logo.png"
import { useRouter } from "next/router"

interface Props {}

const DashboardNav: FC<Props> = () => {
  const { pathname } = useRouter()
  return (
    <Box w="20%" minH="100vh" shadow="lg">
      <Center mt={4}>
        <Image src={Logo} alt="Logo" width={90} />
      </Center>
      <Box
        mt={8}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={6}
        p={4}
      >
        <Link href="/dashboard">
          <Text
            fontSize="md"
            color={pathname === "/dashboard" ? "brand.primary" : "black"}
            fontWeight={pathname === "/dashboard" ? "medium" : "normal"}
          >
            Lab Komputer
          </Text>
        </Link>
        <Link href="/dashboard/tentang">
          <Text
            fontSize="md"
            color={
              pathname === "/dashboard/tentang" ? "brand.primary" : "black"
            }
            fontWeight={pathname === "/dashboard/tentang" ? "medium" : "normal"}
          >
            About
          </Text>
        </Link>
      </Box>
    </Box>
  )
}

export default DashboardNav
