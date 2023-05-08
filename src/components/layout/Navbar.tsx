import { Box, Button } from "@chakra-ui/react"
import Image from "next/image"
import { FC } from "react"
import Logo from "@/assets/images/png/logo.png"
import { Link } from "@chakra-ui/next-js"

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src={Logo} alt="Logo" width={90} height={90} />
      <Link href="/login">
        <Button
          bg="brand.primary"
          color="brand.white"
          borderColor="brand.primary"
          variant="outline"
          _hover={{
            bg: "brand.white",
            color: "brand.primary",
            border: "brand.primary",
            borderColor: "brand.primary",
          }}
        >
          Login
        </Button>
      </Link>
    </Box>
  )
}

export default Navbar
