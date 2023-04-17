import { db, seedDatabase } from "@/database";
import { Product } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  message: string;
};

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  
  if(process.env.NODE_ENV === 'production') {
    return res.status(403).json({
      status: 403,
      message: "Forbidden"
    })
  }
  
  await db.connect();
  await Product.deleteMany();

  // insertar los productos en la base de datos
  await Product.insertMany(seedDatabase.initialData.products)
    .then(() => {
      res.status(200).json({
        status: 200,
        message: "Seeding successful",
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    })
    .finally(() => {
      db.disconnect();
    });
}
