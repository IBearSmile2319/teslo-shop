import { IProduct } from "@/interfaces";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import React from "react";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Grid item xs={6} sm={4} key={product.slug}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" image={`products/${product.images[0]}`} alt={product.title} />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ProductCard;
