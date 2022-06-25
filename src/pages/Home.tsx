import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";

import { useAppSelector } from "../redux/hooks";
import "../styles/pages/home.scss";
import AddProduct from "../components/AddProduct";

function Home() {
  const products = useAppSelector((state) => state.productReducer);
  return (
    <div>
      <AddProduct />
      <div className="products">
        {products.map((product) => (
          <Card key={product.id} className="card">
            <CardHeader title={product.id} />
            <CardMedia component="img" image={product.images[0]} />
            <CardContent>
              <Typography>Description: {product.title}</Typography>
              <Typography>Price: {product.price} $</Typography>
              <br />
              <Button>Add to cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
