import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ name, price, description, image }) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        title={name}
        sx={{ paddingTop: "56,25%", height: 0 }}
        image={image}
        component="img"
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <div sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">{price}</Typography>
        </div>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button aria-label="Add to Card">
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
