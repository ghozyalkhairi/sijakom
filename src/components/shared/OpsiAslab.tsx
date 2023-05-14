import { FC, useState } from "react"
import { Button, useDisclosure } from "@chakra-ui/react"
import TambahRuangModal from "./TambahRuangModal"

interface Props {
  selectedLab?: RuangLab
}

const OpsiAslab: FC<Props> = ({ selectedLab }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [update, setUpdate] = useState(false)
  return (
    <>
      <TambahRuangModal
        onClose={onClose}
        isOpen={isOpen}
        update={update}
        selectedLab={update ? selectedLab : undefined}
      />
      <Button
        onClick={() => {
          setUpdate(false)
          onOpen()
        }}
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
        Tambah Aslab
      </Button>
    </>
  )
}

export default OpsiAslab
