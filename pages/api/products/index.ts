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
    case "POST":
      return createProduct(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender = "all" } = req.query;

  let condition = {};

  if (gender !== "all") {
    condition = { gender };
  }

  if (!SHOP_CONSTANTS.validGenders.includes(gender as string)) {
    return res.status(400).json({
        status: 400,
        message: `Solo se permiten los siguientes géneros: ${SHOP_CONSTANTS.validGenders.join(", ")}`,
    });
  }
  await db.connect();

  await Product.find(condition)
    .select("title images price inStock slug -_id")
    .lean()
    .then((products) => {
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
const createProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  throw new Error("Function not implemented.");
};
