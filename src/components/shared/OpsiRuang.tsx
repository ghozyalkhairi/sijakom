import { FC } from "react"
import { Button, useDisclosure } from "@chakra-ui/react"
import TambahRuangModal from "./TambahRuangModal"

const OpsiRuang: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <TambahRuangModal onClose={onClose} isOpen={isOpen} />
      <Button
        onClick={onOpen}
        w="100%"
        mt={4}
        bg="brand.green"
        color="brand.white"
        size="md"
        variant="outline"
        borderColor="brand.green"
        _hover={{
          bg: "brand.white",
          color: "brand.green",
        }}
      >
        Tambah Ruangan
      </Button>
      <Button
        w="100%"
        mt={4}
        bg="brand.red"
        color="brand.white"
        size="md"
        variant="outline"
        borderColor="brand.red"
        _hover={{
          bg: "brand.white",
          color: "brand.red",
        }}
      >
        Hapus Ruangan
      </Button>
    </>
  )
}

export default OpsiRuang
