import { Box, Button, Select, Text } from "@chakra-ui/react"
import { FC } from "react"
import MakulTable from "./MakulTable"
import OpsiRuang from "./OpsiRuang"

interface Props {
  isAuth?: boolean
  listRuangLab: RuangLab[]
}

const MainCard: FC<Props> = ({ isAuth, listRuangLab }) => {
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
        Informasi Laboratorium
      </Text>
      <Select
        bg="brand.white"
        color="black"
        mt={4}
        placeholder="Pilih Lab Komputer"
      >
        {listRuangLab.map((ruangLab) => (
          <option key={ruangLab.id} value={ruangLab.id}>
            {ruangLab.nama}
          </option>
        ))}
      </Select>
      <Box
        w="100%"
        mt={4}
        bg="brand.white"
        color="black"
        p={4}
        borderRadius="lg"
      >
        <Text as="h3" fontSize="lg" fontWeight="bold" textAlign="center">
          Mata Kuliah Hari Senin
        </Text>
        <Box mt={4} w="100%">
          <MakulTable />
          {isAuth && (
            <Button
              w="100%"
              mt={4}
              bg="brand.primary"
              borderColor="brand.primary"
              variant="outline"
              color="brand.white"
              size="md"
              _hover={{
                bg: "brand.white",
                color: "brand.primary",
              }}
            >
              Update
            </Button>
          )}
        </Box>
      </Box>
      <Box
        w="100%"
        mt={4}
        bg="brand.white"
        color="black"
        p={4}
        borderRadius="lg"
      >
        <Text as="h3" fontSize="lg" fontWeight="bold" textAlign="center">
          Unit Komputer
        </Text>
        <Box mt={4} w="100%">
          <Text as="h4" fontSize="xl" textAlign="center" fontWeight="medium">
            20 Unit
          </Text>
          <Text as="p" fontSize="md" textAlign="center">
            18 aktif, 2 non-aktif
          </Text>
          {isAuth && (
            <Button
              w="100%"
              mt={4}
              bg="brand.primary"
              color="brand.white"
              borderColor="brand.primary"
              size="md"
              variant="outline"
              _hover={{
                bg: "brand.white",
                color: "brand.primary",
              }}
            >
              Update
            </Button>
          )}
        </Box>
      </Box>
      {isAuth && <OpsiRuang />}
    </Box>
  )
}

export default MainCard
