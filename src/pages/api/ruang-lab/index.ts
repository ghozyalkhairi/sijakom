import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const ruanglab = req.body
  switch (req.method) {
    case "GET":
      const resultGet = await prisma.ruangLab.findMany()
      res.send({ data: resultGet, success: true })
      break
    case "POST":
      const resultPost = await prisma.ruangLab.create({
        data: ruanglab,
      })
      res.send({ data: resultPost, success: true })
      break
    case "PUT":
      const { id, ...ruanglabData } = ruanglab
      const resultPut = await prisma.ruangLab.update({
        where: {
          id: ruanglab.id,
        },
        data: ruanglabData,
      })
      res.send({ data: resultPut, success: true })
      break
    default:
      res.status(405).end()
  }
}

export default handler
