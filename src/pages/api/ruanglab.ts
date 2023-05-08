// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const ruanglab = req.body
  switch (req.method) {
    case "GET":
      const resultGet = await prisma.ruangLab.findMany()
      res.send({ data: resultGet, success: true })
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
    case "DELETE":
      const resultDelete = await prisma.ruangLab.delete({
        where: {
          id: ruanglab.id,
        },
      })
      res.send({ data: resultDelete, success: true })
      break
    default:
      res.status(405).end()
  }
}

export default handler
