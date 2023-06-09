import axios, { AxiosError } from "axios"

const API_URL = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"

export const getJadwalLab = async (idLab: string, hari: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/jadwal-lab/${idLab}/${hari}`
    )
    return response.data
  } catch (error) {
    return (error as AxiosError).response?.data
  }
}

export const createJadwalLab = async (jadwal: JadwalDraft) => {
  try {
    const response = await axios.post(`${API_URL}/api/jadwal-lab`, jadwal)
    return response.data
  } catch (error) {
    return (error as AxiosError).response?.data
  }
}

export const updateJadwalLab = async (jadwal: JadwalDraft) => {
  try {
    const response = await axios.put(`${API_URL}/api/jadwal-lab`, jadwal)
    return response.data
  } catch (error) {
    return (error as AxiosError).response?.data
  }
}

export const deleteJadwalLab = async (jadwalId: string) => {
  try {
    const response = await axios.delete(
      `${API_URL}/api/jadwal-lab/hapus/${jadwalId}`
    )
    return response.data
  } catch (error) {
    return (error as AxiosError).response?.data
  }
}
