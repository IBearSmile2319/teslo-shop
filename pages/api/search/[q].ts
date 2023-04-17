import { SHOP_CONSTANTS, db } from "@/database";
import { IProduct } from "@/interfaces";
import { Product } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      status?: number;
      message: string;
    }
  | IProduct[]
  | IProduct;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return searchProducts(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let { q = "" } = req.query;

  if (!q) return res.status(400).json({ message: "No se ha ingresado un término de búsqueda" });

  q = q.toString().toLowerCase();

  await db.connect();

  await Product.find({
    $text: {
      $search: q,
    },
  })
    .select("title images price inStock slug -_id")
    .lean()
    .exec()
    .then((products) => {
      if (!products.length) {
        return res.status(404).json({
          status: 404,
          message: "No se encontraron productos",
        });
      }

      res.status(200).json(products);
    })
    .catch((error) => {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    });

  await db.disconnect();
};
