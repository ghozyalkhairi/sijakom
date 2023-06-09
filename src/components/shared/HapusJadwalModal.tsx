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
import { deleteJadwalLab } from "@/lib/jadwalLab"
import { useAppActions } from "@/store/appStore"

interface Props {
  isOpen: boolean
  onClose: () => void
  jadwalId: string
}

const HapusJadwalModal: FC<Props> = ({ isOpen, onClose, jadwalId }) => {
  const { setReload } = useAppActions()

  const toast = useToast()

  const hapusJadwal = async () => {
    try {
      await deleteJadwalLab(jadwalId)
      setReload()
      onClose()

      toast({
        title: "Berhasil menghapus jadwal",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      })
    } catch (err) {
      console.log(err)
      toast({
        title: "Gagal menghapus jadwal",
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
        <ModalHeader>Hapus Jadwal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Hapus jadwal ini?</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={hapusJadwal}>
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

export default HapusJadwalModal
