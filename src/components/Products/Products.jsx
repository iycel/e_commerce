import { Grid } from "@mui/material";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8n3hnmp-bIAlX8gfdNsE0G4mHoeePypSZRg&usqp=CAU",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "$1000",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
  },
  {
    id: 3,
    name: "PC",
    description: "Asus Notebook",
    price: "$600",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8R6gtPpXb9i_6LYOX1K0ynOOrVOJzrl-Mw&usqp=CAU",
  },
  {
    id: 4,
    name: "Bike",
    description: "Beldeyama Mountain Bikes",
    price: "$300",
  },
  { id: 5, name: "Books", description: "Python AI", price: "$3" },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
