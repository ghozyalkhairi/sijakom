import { FC } from "react"
import { Box, Text } from "@chakra-ui/react"

const AboutCard: FC = () => {
  return (
    <Box
      bg="brand.primary"
      color="brand.white"
      mt={4}
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <Text as="h1" fontSize="xl" fontWeight="bold" textAlign="center">
        Tentang SIJAKOM
      </Text>
      <Box
        bg="brand.white"
        color="black"
        mt={4}
        p={4}
        borderRadius="lg"
        w="100%"
      >
        <Text as="h1" fontSize="md" textAlign="center">
          SIJAKOM adalah Sistem Informasi Jadwal Laboratorium Komputer yang
          dibuat untuk memudahkan dosen dan mahasiswa dalam melihat jadwal
          laboratorium komputer yang ada di Universitas Muhammadiyah Pontinanak.
        </Text>
      </Box>
      <Text as="p" fontSize="sm" textAlign="center" mt={4}>
        Made with ❤️ by Ghozy Alkhairi
      </Text>
    </Box>
  )
}

export default AboutCard
