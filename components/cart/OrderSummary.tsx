import { Grid, Typography } from "@mui/material";
import React from "react";

const OrderSummary = () => {

    const changeQuantity = (quantity: number) => {
        return (quantity).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. productos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>3 items</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`$${changeQuantity(155.36)}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Impuestos (15%)</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`$${changeQuantity(35.34)}`}</Typography>
      </Grid>
      <Grid item xs={6} mt={2}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item xs={6} mt={2} display="flex" justifyContent="end">
        <Typography variant="subtitle1">{`$${changeQuantity(186.34)}`}</Typography>
      </Grid>
    </Grid>
  );
};

export default OrderSummary;
