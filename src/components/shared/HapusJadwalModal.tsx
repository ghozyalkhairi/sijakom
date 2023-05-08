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

  const hapusJadwal = async () => {
    try {
      await deleteJadwalLab(jadwalId)
      setReload()
      onClose()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Hapus Jadwal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Apakah anda yakin ingin menghapus jadwal ini?</Text>
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
