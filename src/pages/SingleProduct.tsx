import {
  CardMedia,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import useProduct from "../redux/hooks/useProduct";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = useProduct(productId);
  return (
    <div className="view__product--details">
      {product && (
        <Card className="card" style={{width: 400, height: 550}}>
          <CardMedia component="img" image={product.images[0]} />
          <CardContent>
            <Typography>{product.title}</Typography>
            <Typography>Price: {product.price} $</Typography>
            <Typography>Category: {product.category.name}</Typography>
            <Typography>More info: {product.description}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SingleProduct;
