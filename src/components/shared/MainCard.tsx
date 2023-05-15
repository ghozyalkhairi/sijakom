import { Box, Button, Select, Text, useDisclosure } from "@chakra-ui/react"
import { FC, useState } from "react"
import MakulTable from "./MakulTable"
import OpsiRuang from "./OpsiRuang"
import JadwalModal from "./JadwalModal"
import { format } from "date-fns"
import { id } from "date-fns/locale"

interface Props {
  isAuth?: boolean
  listRuangLab: RuangLab[]
}

const MainCard: FC<Props> = ({ isAuth, listRuangLab }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [selectedRuangLab, setSelectedRuangLab] = useState<string>(
    listRuangLab[0]?.id || ""
  )

  const day = format(new Date(), "EEEE", { locale: id })

  const [hari, setHari] = useState<string>(day || "Senin")

  const selectedLab = listRuangLab.find(
    (ruangLab) => ruangLab.id === selectedRuangLab
  ) as RuangLab

  if (listRuangLab.length === 0) {
    return (
      <Box
        bg="brand.primary"
        color="brand.white"
        mt={4}
        p={4}
        borderRadius="lg"
        w="100%"
      >
        <Text as="h2" fontSize="lg" fontWeight="medium" textAlign="center">
          Belum ada ruangan lab yang ditambahkan
        </Text>
        {isAuth && <OpsiRuang tambah />}
      </Box>
    )
  }

  return (
    <>
      <JadwalModal
        isOpen={isOpen}
        onClose={onClose}
        selectedLabId={selectedLab?.id || ""}
        selectedLabName={selectedLab?.nama || ""}
        hari={hari}
        setHari={setHari}
      />
      <Box
        bg="brand.primary"
        color="brand.white"
        mt={4}
        p={4}
        borderRadius="lg"
        w="100%"
      >
        <Text as="h2" fontSize="lg" fontWeight="bold" textAlign="center">
          Informasi Laboratorium
        </Text>
        <Select
          bg="brand.white"
          color="black"
          mt={4}
          value={selectedRuangLab}
          onChange={(e) => setSelectedRuangLab(e.target.value)}
        >
          {listRuangLab.map((ruangLab) => (
            <option key={ruangLab.id} value={ruangLab.id}>
              {ruangLab.nama}
            </option>
          ))}
        </Select>
        <Select
          bg="brand.white"
          color="black"
          mt={4}
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
        <Box
          w="100%"
          mt={4}
          bg="brand.white"
          color="black"
          p={4}
          borderRadius="lg"
        >
          <Text as="h3" fontSize="lg" fontWeight="bold" textAlign="center">
            Jadwal Hari {hari}
          </Text>
          <Box mt={4} w="100%">
            <MakulTable
              selectedLab={selectedLab}
              hari={hari}
              setHari={setHari}
              isAuth={isAuth}
            />
            {isAuth && (
              <Button
                onClick={onOpen}
                w="100%"
                mt={4}
                bg="brand.primary"
                borderColor="brand.primary"
                variant="outline"
                color="brand.white"
                size="md"
                _hover={{
                  bg: "brand.white",
                  color: "brand.primary",
                }}
              >
                Tambah
              </Button>
            )}
          </Box>
        </Box>
        <Box
          w="100%"
          mt={4}
          bg="brand.white"
          color="black"
          p={4}
          borderRadius="lg"
        >
          <Text as="h3" fontSize="lg" fontWeight="bold" textAlign="center">
            Unit Komputer
          </Text>
          <Box mt={4} w="100%">
            <Text as="h4" fontSize="xl" textAlign="center" fontWeight="medium">
              {selectedLab?.jumlahKomputerTotal} Unit
            </Text>
            <Text as="p" fontSize="md" textAlign="center">
              {selectedLab?.jumlahKomputerAktif} aktif,{" "}
              {selectedLab?.jumlahKomputerTotal -
                selectedLab?.jumlahKomputerAktif}{" "}
              non-aktif
            </Text>
          </Box>
        </Box>
        {isAuth && <OpsiRuang selectedLab={selectedLab} />}
      </Box>
    </>
  )
}

export default MainCard
