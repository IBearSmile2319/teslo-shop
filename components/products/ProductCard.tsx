import { IProduct } from "@/interfaces";
import NextLink from "next/link";
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered ? `products/${product.images[1]}` : `products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid item xs={6} sm={4} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card>
        <Link underline="none" component={NextLink} href={`/product/${product.slug}`} prefetch={false}>
          <CardActionArea>
            <CardMedia component="img" image={productImage} alt={product.title} className="fadeIn" />
          </CardActionArea>
        </Link>
      </Card>
      <Box ml={1} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductCard;
