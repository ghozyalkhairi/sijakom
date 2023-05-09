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
import { createJadwalLab, updateJadwalLab } from "@/lib/jadwalLab"
import { useAppActions } from "@/store/appStore"

interface Props {
  isOpen: boolean
  onClose: () => void
  selectedLabId: string
  selectedLabName: string
  hari: string
  setHari: (hari: string) => void
  jadwal?: Jadwal
  edit?: boolean
}

const JadwalModal: FC<Props> = ({
  isOpen,
  onClose,
  selectedLabId,
  selectedLabName,
  hari,
  setHari,
  jadwal,
  edit,
}) => {
  const [jamMulai, setJamMulai] = useState(jadwal?.jamMulai || "")
  const [jamSelesai, setJamSelesai] = useState(jadwal?.jamSelesai || "")
  const [namaMakul, setNamaMakul] = useState(jadwal?.matkul || "")
  const [namaDosen, setNamaDosen] = useState(jadwal?.dosen || "")
  const [urutan, setUrutan] = useState(jadwal?.urutan || 1)

  const { setReload } = useAppActions()

  const handleUpdate = async () => {
    const jadwalLab = {
      id: jadwal?.id,
      ruangLabId: jadwal?.ruangLabId || selectedLabId,
      hari,
      jamMulai,
      jamSelesai,
      matkul: namaMakul,
      dosen: namaDosen,
      urutan,
    }

    try {
      await updateJadwalLab(jadwalLab as JadwalDraft)
      onClose()
      setReload()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async () => {
    const jadwalLab = {
      ruangLabId: selectedLabId,
      hari,
      jamMulai,
      jamSelesai,
      matkul: namaMakul,
      dosen: namaDosen,
      urutan,
    }

    try {
      await createJadwalLab(jadwalLab as JadwalDraft)
      onClose()
      setReload()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (jadwal) {
      setJamMulai(jadwal.jamMulai)
      setJamSelesai(jadwal.jamSelesai)
      setNamaMakul(jadwal.matkul)
      setNamaDosen(jadwal.dosen)
      setUrutan(jadwal.urutan)
    }
  }, [jadwal])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Jadwal {selectedLabName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mt={4}>
            <FormLabel>Hari</FormLabel>
            <Select
              placeholder="Pilih Hari"
              value={hari}
              onChange={(e) => setHari(e.target.value)}
            >
              <option value="Senin">Senin</option>
              <option value="Selasa">Selasa</option>
              <option value="Rabu">Rabu</option>
              <option value="Kamis">Kamis</option>
              <option value="Jumat">Jumat</option>
              <option value="Sabtu">Sabtu</option>
              <option value="Minggu">Minggu</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Urutan Matkul</FormLabel>
            <Input
              type="number"
              value={urutan}
              onChange={(e) => setUrutan(parseInt(e.target.value))}
              min={1}
              max={10}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Jam Mulai</FormLabel>
            <Input
              type="time"
              value={jamMulai}
              onChange={(e) => setJamMulai(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Jam Selesai</FormLabel>
            <Input
              type="time"
              value={jamSelesai}
              onChange={(e) => setJamSelesai(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Mata Kuliah</FormLabel>
            <Input
              type="text"
              placeholder="Nama Mata Kuliah"
              value={namaMakul}
              onChange={(e) => setNamaMakul(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Dosen Pengampu</FormLabel>
            <Input
              type="text"
              placeholder="Nama Dosen Pengampu"
              value={namaDosen}
              onChange={(e) => setNamaDosen(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          {edit ? (
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Update
            </Button>
          ) : (
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Tambah
            </Button>
          )}
          <Button onClick={onClose} variant="ghost">
            Batal
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default JadwalModal
