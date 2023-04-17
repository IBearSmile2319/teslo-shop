import { IProduct } from "@/interfaces";
import mongoose, { Schema, model, Model } from "mongoose";

const productSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    inStock: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    sizes: [
      {
        type: String,
        enum: {
          // 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL'
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "{VALUE} is not a valid size",
        },
      },
    ],
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: {
        // 'shirts'|'pants'|'hoodies'|'hats'
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} is not a valid type",
      },
    },
    gender: {
      type: String,
      enum: {
        // 'men'|'women'|'kid'|'unisex'
        values: ["men", "women", "kid", "unisex"],
        message: "{VALUE} is not a valid type",
      },
    },
  },
  {
    timestamps: true,
  }
);

// TODO:

productSchema.index({ title: "text", tags: "text" });

const Product: Model<IProduct> = mongoose.models.Product || model("Product", productSchema);

export default Product;
