import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const { labId, hari } = req.query
      const result = await prisma.jadwal.findMany({
        where: {
          ruangLabId: labId as string,
          hari: hari as string,
        },
        orderBy: {
          urutan: "asc",
        },
      })
      res.send({ data: result, success: true })
  }
}

export default handler
