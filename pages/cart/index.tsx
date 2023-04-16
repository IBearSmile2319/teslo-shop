import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const CartPage = () => {
  return (
    <ShopLayout title="Cart" pageDescription="Carrito de compras de la tienda">
      <Typography variant="h1" component="h1">
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
            {/* CardList */}
            <CartList 
                editable
            />
        </Grid>
        <Grid item xs={12} sm={5}>
            <Card className="summary-card">
                <CardContent>
                    <Typography variant="h2">Orden</Typography>
                    <Divider sx={{my: 2}} />
                    {/* order summary */}
                    <OrderSummary/> 
                    <Box sx={{ mt: 3 }}>
                        <Button color="secondary" className="circular-btn" fullWidth >
                            Checkout
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
