import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { initialData } from "@/database/products";
import { Typography } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ShopLayout title="Teslo-shop" pageDescription="Teslo-shop">
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          mb: 1,
        }}
      >
        Todos los productos
      </Typography>

      {/* <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item xs={6} sm={4} key={product.slug}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" image={`products/${product.images[0]}`} alt={product.title} />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <ProductList
        products={initialData.products as any}
      />
    </ShopLayout>
  );
}
