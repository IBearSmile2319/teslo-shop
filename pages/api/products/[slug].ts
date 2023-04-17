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
      return getProducts(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { slug } = req.query;

  let condition = { slug };

  await db.connect();

  await Product.find(condition)
    // .select("title images price inStock slug -_id")
    .lean()
    .exec()
    .then((product) => {
      if (!product.length) {
        return res.status(404).json({
          status: 404,
          message: "Producto no encontrado",
        });
      }

      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    });
  await db.disconnect();
};
