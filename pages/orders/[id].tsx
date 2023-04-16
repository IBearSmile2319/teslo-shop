import { CartList, OrderSummary } from "@/components/cart";
import NextLink from "next/link";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout title="Resumen de orden 1212323" pageDescription={`Resumen de la orden`}>
      <Typography variant="h1" component="h1">
        Orden: 1212323
      </Typography>
      {/* <Chip
      sx={{my: 2}}
      label="Pendiente de pag"
      variant="outlined"
      color="error"
      icon={<CreditCardOffOutlined/>} 
      /> */}
      <Chip sx={{ my: 2 }} label="Orden ya fue pagada" variant="outlined" color="success" icon={<CreditScoreOutlined />} />
      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* CardList */}
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 items)</Typography>
              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">Dirección de entrega:</Typography>
                <Link component={NextLink} href="/checkout/address" passHref underline="always">
                  Editar
                </Link>
              </Box>

              <Typography>Maicol Manuel</Typography>
              <Typography>Av. 9 de Julio 1234</Typography>
              <Typography>Capital Federal</Typography>
              <Typography>Argentina</Typography>
              <Typography>1000</Typography>
              <Typography>
                <strong>Telefono:</strong> 123456789
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box display="flex" justifyContent="end">
                <Link component={NextLink} href="/cart" passHref underline="always">
                  Editar
                </Link>
              </Box>

              {/* order summary */}
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                <Chip sx={{ my: 2 }} label="Orden ya fue pagada" variant="outlined" color="success" icon={<CreditScoreOutlined />} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
