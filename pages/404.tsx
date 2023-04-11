import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import React from "react";

const Custom404 = () => {
  return (
    <ShopLayout title="404 | Teslo Shop" pageDescription="404 | Teslo Shop">
      <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 200px)"
        flexDirection={{ xs: 'column', md: 'row' }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
            404 |
        </Typography>
        <Typography ml={2}>
            No encontramos ninguna página aquí
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
