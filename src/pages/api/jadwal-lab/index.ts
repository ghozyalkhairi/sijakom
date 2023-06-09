import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      const jadwal = req.body
      const resultPost = await prisma.jadwal.create({
        data: jadwal,
      })
      res.send({ data: resultPost, success: true })
      break

    case "PUT":
      const { id, ...jadwalPut } = req.body
      const resultPut = await prisma.jadwal.update({
        where: {
          id,
        },
        data: jadwalPut,
      })
      res.send({ data: resultPut, success: true })
      break

    default:
      res.status(405).end()
  }
}

export default handler
