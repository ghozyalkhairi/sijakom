import {
  Table,
  Thead,
  Tbody,
  useDisclosure,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react"
import { FC, useState, useEffect } from "react"
import { getJadwalLab } from "@/lib/jadwalLab"
import JadwalModal from "./JadwalModal"
import HapusJadwalModal from "./HapusJadwalModal"

interface Props {
  selectedLab: RuangLab
  hari: string
  setHari: (hari: string) => void
  isAuth?: boolean
}

const MakulTable: FC<Props> = ({ selectedLab, hari, isAuth, setHari }) => {
  const { id: selectedLabId, nama: selectedLabName } = selectedLab
  const [loadingJadwalLab, setLoadingJadwalLab] = useState<boolean>(true)
  const [jadwalLab, setJadwalLab] = useState<Jadwal[]>([])
  const [selectedJadwalID, setSelectedJadwalID] = useState("")

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenHapus,
    onOpen: onOpenHapus,
    onClose: onCloseHapus,
  } = useDisclosure()

  useEffect(() => {
    const fetchJadwalLab = async () => {
      setLoadingJadwalLab(true)
      const jadwalLab = await getJadwalLab(selectedLabId as string, hari)
      setJadwalLab(jadwalLab.data)
      setLoadingJadwalLab(false)
    }
    fetchJadwalLab()
  }, [hari, selectedLab])
  if (loadingJadwalLab) {
    return (
      <Center my={2}>
        <Spinner size="md" />
      </Center>
    )
  }
  if (jadwalLab.length === 0) {
    return (
      <Center>
        <Text>Tidak ada jadwal</Text>
      </Center>
    )
  }
  return (
    <>
      <HapusJadwalModal
        isOpen={isOpenHapus}
        onClose={onCloseHapus}
        jadwalId={selectedJadwalID}
      />
      <JadwalModal
        isOpen={isOpen}
        onClose={onClose}
        selectedLabId={selectedLabId as string}
        selectedLabName={selectedLabName}
        hari={hari}
        setHari={setHari}
        jadwal={jadwalLab.find((jadwal) => jadwal.id === selectedJadwalID)}
        edit={true}
      />
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Jadwal {selectedLabName}</TableCaption>
          <Thead>
            <Tr>
              <Th isNumeric>Waktu</Th>
              <Th>Mata Kuliah</Th>
              <Th>Dosen Pengampu</Th>
              {isAuth && (
                <>
                  <Th>Edit</Th>
                  <Th>Hapus</Th>
                </>
              )}
            </Tr>
          </Thead>
          <Tbody>
            {jadwalLab.map((jadwal) => (
              <Tr key={jadwal.id}>
                <Td isNumeric>
                  {jadwal.jamMulai} {" - "} {jadwal.jamSelesai}
                </Td>
                <Td>{jadwal.matkul}</Td>
                <Td>{jadwal.dosen}</Td>
                {isAuth && (
                  <>
                    <Td>
                      <Button
                        onClick={() => {
                          setSelectedJadwalID(jadwal.id as string)
                          onOpen()
                        }}
                        w="100%"
                        colorScheme="blue"
                        size="sm"
                      >
                        Edit
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        w="100%"
                        colorScheme="red"
                        size="sm"
                        onClick={() => {
                          setSelectedJadwalID(jadwal.id as string)
                          onOpenHapus()
                        }}
                      >
                        Hapus
                      </Button>
                    </Td>
                  </>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MakulTable
