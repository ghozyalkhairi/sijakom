import { FC, useState } from "react"
import { Button, useDisclosure } from "@chakra-ui/react"
import TambahRuangModal from "./TambahRuangModal"
import HapusRuangModal from "./HapusRuangModal"

interface Props {
  tambah?: boolean
  selectedLab?: RuangLab
}

const OpsiRuang: FC<Props> = ({ tambah, selectedLab }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenHapus,
    onOpen: onOpenHapus,
    onClose: onCloseHapus,
  } = useDisclosure()
  const [update, setUpdate] = useState(false)
  return (
    <>
      <TambahRuangModal
        onClose={onClose}
        isOpen={isOpen}
        update={update}
        selectedLab={update ? selectedLab : undefined}
      />
      <HapusRuangModal
        onClose={onCloseHapus}
        isOpen={isOpenHapus}
        selectedLab={selectedLab as RuangLab}
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
        Tambah Ruangan
      </Button>
      <Button
        onClick={() => {
          setUpdate(true)
          onOpen()
        }}
        w="100%"
        mt={4}
        bg="brand.white"
        color="brand.primary"
        size="md"
        variant="outline"
        borderColor="brand.primary"
        _hover={{
          bg: "brand.primary",
          color: "brand.white",
          borderColor: "brand.white",
        }}
      >
        Update Ruangan
      </Button>
      {!tambah && (
        <Button
          onClick={onOpenHapus}
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
      )}
    </>
  )
}

export default OpsiRuang
