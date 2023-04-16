import { ShopLayout } from "@/components/layouts";
import NextLink from "next/link";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "fullname", headerName: "Nombre completo", width: 130 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestran la información si esta pagada o no",
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return <Chip label={params.value ? "Pagada" : "No pagada"} color={params.value ? "success" : "error"} variant="outlined" />;
    },
  },
  {
    field: "Orden",
    headerName: "Ver orden",
    description: "Muestra la información de la orden",
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Link component={NextLink} href={`/orders/${params.row.id}`} underline="always">
          Ver orden
        </Link>
      );
    },
  },
];

const rows = [
  { id: 1, paid: true, fullname: "John Doe" },
  { id: 2, paid: false, fullname: "Jane Doe" },
  { id: 3, paid: true, fullname: "Joe Doe" },
  { id: 4, paid: false, fullname: "Jack Doe" },
  { id: 5, paid: true, fullname: "Jill Doe" },
  { id: 6, paid: false, fullname: "Jen Doe" },
  { id: 7, paid: true, fullname: "Jim Doe" },
  { id: 8, paid: false, fullname: "Jenny Doe" },
  { id: 9, paid: true, fullname: "Jenny Doe" },
  { id: 10, paid: false, fullname: "Jenny Doe" },
  { id: 11, paid: true, fullname: "Jenny Doe" },
  { id: 12, paid: false, fullname: "Jenny Doe" },
  { id: 13, paid: true, fullname: "Jenny Doe" },
  { id: 14, paid: false, fullname: "Jenny Doe" },
  { id: 15, paid: true, fullname: "Jenny Doe" },
];

const HistoryPage = () => {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription={`Historial de ordenes del cliente`}>
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            height: 650,
            width: "100%",
          }}
        >
          <DataGrid rows={rows} columns={columns} pagination pageSizeOptions={[5, 10, 20]} autoPageSize />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
