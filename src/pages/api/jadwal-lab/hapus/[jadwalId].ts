import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      const { jadwalId } = req.query
      const resultDelete = await prisma.jadwal.delete({
        where: {
          id: jadwalId as string,
        },
      })
      res.send({ data: resultDelete, success: true })
      break
  }
}

export default handler
