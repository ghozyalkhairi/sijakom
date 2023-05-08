import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"

const MakulTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Jadwal Makul Lab Komputer Dasar</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>Waktu</Th>
            <Th>Mata Kuliah</Th>
            <Th>Dosen Pengampu</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isNumeric>08.30 - 10.30</Td>
            <Td>Aplikasi Komputer</Td>
            <Td>Budiman, ST., MT</Td>
          </Tr>
          <Tr>
            <Td isNumeric>10.30 - 12.30</Td>
            <Td>Aplikasi Komputer</Td>
            <Td>Budiman, ST., MT</Td>
          </Tr>
          <Tr>
            <Td isNumeric>13.30 - 14.30</Td>
            <Td>Aplikasi Komputer</Td>
            <Td>Budiman, ST., MT</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default MakulTable
