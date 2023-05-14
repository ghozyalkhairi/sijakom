import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { username, password, fullname } = req.body
      const hashedPassword = await hashPassword(password)
      const user = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          fullname,
        },
      })
      res.status(200).send({ user, success: true })
    } catch (error) {
      res.status(400).send({ error, success: false })
    }
  }
  res.status(405).end()
}

export default handler
