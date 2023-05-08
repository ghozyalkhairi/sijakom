import { Box, Select, Text } from "@chakra-ui/react"
import { FC } from "react"

interface Props {}

const MainCard: FC<Props> = () => {
  return (
    <Box
      bg="brand.primary"
      color="brand.white"
      mt={4}
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <Text as="h2" fontSize="lg" fontWeight="bold" textAlign="center">
        Informasi
      </Text>
      <Select
        bg="brand.white"
        color="black"
        mt={4}
        placeholder="Pilih Lab Komputer"
      >
        <option value="labkomdasar">Lab Komputer Dasar</option>
        <option value="labkomti-a">Lab Komputer Teknik Informatika A</option>
      </Select>
      <Box mt={4} bg="brand.white" color="black" p={4} borderRadius="lg">
        <Text as="h3" fontSize="lg" fontWeight="bold" textAlign="center">
          Mata Kuliah Saat Ini
        </Text>
        <Box mt={4}>
          <Text as="h4" fontSize="xl" textAlign="center" fontWeight="medium">
            Aplikasi Komputer
          </Text>
          <Text as="p" fontSize="md" textAlign="center">
            Nama Dosen
          </Text>
        </Box>
      </Box>
      <Box mt={4} bg="brand.white" color="black" p={4} borderRadius="lg">
        <Text as="h3" fontSize="lg" fontWeight="bold" textAlign="center">
          Unit Komputer
        </Text>
        <Box mt={4}>
          <Text as="h4" fontSize="xl" textAlign="center" fontWeight="medium">
            20 Unit
          </Text>
          <Text as="p" fontSize="md" textAlign="center">
            18 aktif, 2 non-aktif
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default MainCard
