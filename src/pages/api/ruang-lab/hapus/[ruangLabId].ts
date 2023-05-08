import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      const { ruangLabId } = req.query
      const resultDelete = await prisma.ruangLab.delete({
        where: {
          id: ruangLabId as string,
        },
      })
      res.send({ data: resultDelete, success: true })
      break
  }
}

export default handler
