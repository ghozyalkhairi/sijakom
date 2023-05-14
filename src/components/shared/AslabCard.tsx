import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"
import OpsiAslab from "./OpsiAslab"

const AslabCard: FC = () => {
  return (
    <Box
      bg="brand.primary"
      color="brand.white"
      mt={4}
      p={4}
      borderRadius="lg"
      w="100%"
    >
      <Text fontSize="lg" fontWeight="medium" textAlign="center">
        Asisten Lab
      </Text>
      <OpsiAslab />
    </Box>
  )
}

export default AslabCard
