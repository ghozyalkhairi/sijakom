import { FC, useState, useEffect } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react"
import { useAppActions } from "@/store/appStore"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const TambahAslabModal: FC<Props> = ({ isOpen, onClose }) => {
  const [nama, setNama] = useState("")
  const [listRuangLab, setListRuangLab] = useState<RuangLab[]>([])
  const [ruangLab, setRuangLab] = useState("")
  const { setReload } = useAppActions()

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tambah Asisten Lab</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt={4}>
            <FormLabel>Nama Aslab</FormLabel>
            <Input
              placeholder="Nama Ruangan"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Ruangan Lab</FormLabel>
            <Select
              placeholder="Pilih Ruangan Lab"
              value={ruangLab}
              onChange={(e) => setRuangLab(e.target.value)}
            >
              {listRuangLab.map((ruangLab) => (
                <option key={ruangLab.id} value={ruangLab.id}>
                  {ruangLab.nama}
                </option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Submit
          </Button>
          <Button onClick={onClose} variant="ghost">
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TambahAslabModal
