import axios, { AxiosError } from "axios"

const API_URL = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"

export const getRuangLab = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/ruanglab`)
    return response.data
  } catch (error) {
    return (error as AxiosError).response?.data
  }
}

export const createRuangLab = async (ruangLab: RuangLabDraft) => {
  try {
    const response = await axios.post(`${API_URL}/api/ruanglab`, ruangLab)
    return response.data
  } catch (error) {
    return (error as AxiosError).response?.data
  }
}

export const updateRuangLab = async (ruangLab: RuangLabDraft) => {
  try {
    const response = await axios.put(`${API_URL}/api/ruanglab`, ruangLab)
    return response.data
  } catch (error) {
    return (error as AxiosError).response?.data
  }
}

export const deleteRuangLab = async (ruangLab: RuangLabDraft) => {
  try {
    const response = await axios.delete(`${API_URL}/api/ruanglab`, {
      data: ruangLab,
    })
    return response.data
  } catch (error) {
    return (error as AxiosError).response?.data
  }
}
