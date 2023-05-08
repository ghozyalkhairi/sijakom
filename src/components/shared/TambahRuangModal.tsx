import { FC, useState } from "react"
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
} from "@chakra-ui/react"
import { createRuangLab } from "@/lib/ruangLab"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const TambahRuangModal: FC<Props> = ({ isOpen, onClose }) => {
  const [nama, setNama] = useState("")
  const [totalUnit, setTotalUnit] = useState(0)
  const [unitAktif, setUnitAktif] = useState(0)

  const tambahRuangLab = () => {
    const ruangLab = {
      nama,
      jumlahKomputerTotal: totalUnit,
      jumlahKomputerAktif: unitAktif,
    }
    if (nama && totalUnit && unitAktif) {
      createRuangLab(ruangLab)
        .then((res) => {
          setNama("")
          setTotalUnit(0)
          setUnitAktif(0)
          console.log(res)
          onClose()
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Tambah Ruangan Lab</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt={4}>
            <FormLabel>Nama Ruangan</FormLabel>
            <Input
              placeholder="Nama Ruangan"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Total Unit Komputer</FormLabel>
            <Input
              placeholder="Total Unit"
              type="number"
              value={totalUnit}
              onChange={(e) => setTotalUnit(parseInt(e.target.value))}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Jumlah Unit Komputer Aktif</FormLabel>
            <Input
              placeholder="Jumlah Unit Aktif"
              type="number"
              value={unitAktif}
              onChange={(e) => setUnitAktif(parseInt(e.target.value))}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={tambahRuangLab}>
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

export default TambahRuangModal
