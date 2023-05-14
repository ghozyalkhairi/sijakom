import axios from "axios"

export const registerAslab = async (data: UserDraft) => {
  try {
    const response = await axios.post("/api/auth/register", data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
