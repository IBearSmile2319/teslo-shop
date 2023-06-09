import { ShopLayout } from "@/components/layouts";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";

const AddressPage = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección de envío">
      <Typography variant="h1" component="h1">
        Dirección
      </Typography>
      <Grid container spacing={2} sx={{
        mt: 2,
      }}>
        {/* nombre, apellido, dirección, direccion2(opcional), codigo postal, ciudad,  */}
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Dirección" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Dirección 2" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Código postal" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="filled" fullWidth>
            <Select variant="filled" label="País" value={1}>
              <MenuItem value={1}>Argentina</MenuItem>
              <MenuItem value={2}>Brasil</MenuItem>
              <MenuItem value={3}>Chile</MenuItem>
              <MenuItem value={4}>Colombia</MenuItem>
              <MenuItem value={5}>Ecuador</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Teléfono" variant="filled" fullWidth />
        </Grid>
      </Grid>
      <Box
        sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
        }}
      >
        <Button
            color="secondary"
            className="circular-btn"
            size="large"
        >
            Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
