import { IProduct } from "@/interfaces";
import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCard
            product={product}
            key={product.slug}
        />
      ))}
    </Grid>
  );
};

export default ProductList;
