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
  useToast,
} from "@chakra-ui/react"
import { createRuangLab, updateRuangLab } from "@/lib/ruangLab"
import { useAppActions } from "@/store/appStore"

interface Props {
  isOpen: boolean
  onClose: () => void
  update?: boolean
  selectedLab?: RuangLab | undefined
}

const TambahRuangModal: FC<Props> = ({
  isOpen,
  onClose,
  update,
  selectedLab,
}) => {
  const [nama, setNama] = useState<string>(selectedLab?.nama || "")
  const [totalUnit, setTotalUnit] = useState<number>(
    selectedLab?.jumlahKomputerTotal || 0
  )
  const [unitAktif, setUnitAktif] = useState<number>(
    selectedLab?.jumlahKomputerAktif || 0
  )

  const toast = useToast()

  const { setReload } = useAppActions()

  const updateRuangLabHandler = () => {
    const ruangLab = {
      id: selectedLab?.id,
      nama,
      jumlahKomputerTotal: totalUnit,
      jumlahKomputerAktif: unitAktif,
    }
    if (unitAktif > totalUnit) {
      return
    }
    if (nama && totalUnit && unitAktif) {
      updateRuangLab(ruangLab)
        .then((res) => {
          setNama("")
          setTotalUnit(0)
          setUnitAktif(0)
          onClose()
          setReload()

          toast({
            title: "Berhasil",
            description: "Berhasil mengupdate ruangan",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        })
        .catch((err) => {
          console.log(err)
          toast({
            title: "Gagal",
            description: "Gagal mengupdate ruangan",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        })
    }
  }

  const tambahRuangLab = () => {
    const ruangLab = {
      nama,
      jumlahKomputerTotal: totalUnit,
      jumlahKomputerAktif: unitAktif,
    }
    if (unitAktif > totalUnit) {
      return
    }
    if (nama && totalUnit && unitAktif) {
      createRuangLab(ruangLab)
        .then((res) => {
          setNama("")
          setTotalUnit(0)
          setUnitAktif(0)
          onClose()
          setReload()

          toast({
            title: "Berhasil",
            description: "Berhasil menambahkan ruangan",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        })
        .catch((err) => {
          console.log(err)
          toast({
            title: "Gagal",
            description: "Gagal menambahkan ruangan",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        })
    }
  }

  useEffect(() => {
    if (update && selectedLab) {
      setNama(selectedLab.nama)
      setTotalUnit(selectedLab.jumlahKomputerTotal)
      setUnitAktif(selectedLab.jumlahKomputerAktif)
    }
    if (!update) {
      setNama("")
      setTotalUnit(0)
      setUnitAktif(0)
    }
  }, [update])
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{update ? "Update " : "Tambah "} Ruangan</ModalHeader>
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
              min={0}
              max={100}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Jumlah Unit Komputer Aktif</FormLabel>
            <Input
              placeholder="Jumlah Unit Aktif"
              type="number"
              value={unitAktif}
              onChange={(e) => setUnitAktif(parseInt(e.target.value))}
              min={0}
              max={totalUnit}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={update ? updateRuangLabHandler : tambahRuangLab}
          >
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
