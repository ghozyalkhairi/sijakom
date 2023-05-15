import { FC } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react"
import { deleteRuangLab } from "@/lib/ruangLab"
import { useAppActions } from "@/store/appStore"

interface Props {
  isOpen: boolean
  onClose: () => void
  selectedLab: RuangLab
}

const HapusRuangModal: FC<Props> = ({ isOpen, onClose, selectedLab }) => {
  const { setReload } = useAppActions()

  const toast = useToast()

  const hapusRuangan = async () => {
    try {
      await deleteRuangLab(selectedLab.id as string)
      setReload()
      onClose()

      toast({
        title: "Berhasil menghapus ruangan",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      })
    } catch (err) {
      console.log(err)
      toast({
        title: "Gagal menghapus ruangan",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      })
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hapus Ruangan</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Hapus ruangan {selectedLab.nama}?</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={hapusRuangan}>
            Hapus
          </Button>
          <Button onClick={onClose} variant="ghost">
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default HapusRuangModal
