import { type } from "os"

type RuangLabDraft = {
  id?: string
  nama: string
  jumlahKomputerAktif: number
  jumlahKomputerTotal: number
}

type RuangLab = RuangLabDraft & {
  jadwal?: Jadwal[]
}

type JadwalDraft = {
  id?: string
  ruangLabId: string
  hari: string
  jamMulai: string
  jamSelesai: string
  matkul: string
  dosen: string
  urutan: number
}

type Jadwal = JadwalDraft & {
  ruangLab: RuangLab
}

type UserDraft = {
  username: string
  password: string
  fullname: string
}

type User = UserDraft & {
  id: string
  role: "admin" | "user"
}
