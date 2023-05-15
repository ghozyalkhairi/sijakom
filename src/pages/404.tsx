import { Text, Button, Box } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"

const NotFound = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text as="h1" fontSize="xl" fontWeight="bold" textAlign="center" mt={4}>
        404 Not Found
      </Text>
      <Text as="p" fontSize="md" textAlign="center" mt={4}>
        Halaman yang anda cari tidak ditemukan
      </Text>
      <Button
        as={Link}
        href="/"
        bg="brand.primary"
        color="brand.white"
        size="md"
        mt={4}
        fontSize="sm"
        fontWeight="normal"
        variant="outline"
        borderWidth={2}
        _hover={{
          bg: "brand.white",
          color: "brand.primary",
          borderColor: "brand.primary",
        }}
      >
        Kembali ke Beranda
      </Button>
    </Box>
  )
}

export default NotFound
