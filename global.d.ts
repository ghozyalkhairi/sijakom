type RuangLabDraft = {
  id?: string
  nama: string
  jumlahKomputerAktif: number
  jumlahKomputerTotal: number
}

type RuangLab = RuangLabDraft & {
  jadwal?: Jadwal[]
}

type Jadwal = {
  id?: string
  ruangLab: RuangLab
  ruangLabId: string
  hari: string
  jamMulai: string
  jamSelesai: string
  matkul: string
  dosen: string
}
