import { initialData } from "@/database/products";
import NextLink from "next/link";
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { ItemCounter } from "../ui";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
];

interface CartListProps {
  editable?: boolean;
}

const CartList = ({ editable = false }: CartListProps) => {
  return (
    <>
      {productInCart.map((product) => (
        <Grid container key={product.slug} spacing={2}>
          <Grid item xs={3}>
            <Link component={NextLink} href={`/products/${product.slug}`} passHref>
              <CardActionArea>
                <CardMedia
                  image={`/products/${product.images[0]}`}
                  component="img"
                  sx={{
                    borderRadius: "5px",
                  }}
                />
              </CardActionArea>
            </Link>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>XL</strong>
              </Typography>

              {/* condicional */}
              {editable ? <ItemCounter /> : <Typography variant="h5">3 items</Typography>}
            </Box>
          </Grid>
          <Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
            <Typography variant="subtitle1" fontWeight="bold">
              {`$${product.price}`}
            </Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CartList;
