import NextLink from "next/link";
import { ShopLayout } from "@/components/layouts";

import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import React from "react";

const EmptyPage = () => {
  return (
    <ShopLayout title="Cart Empty" pageDescription="No hay articulos en el carrito">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        flexDirection={{ xs: "column", md: "row" }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography>Su carrito está vacío</Typography>
          <Link component={NextLink} href="/" typography="h4" color="secondary">
            Regresar
          </Link>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
