import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import useProduct from "../redux/hooks/useProduct";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = useProduct(productId);
  const navigate = useNavigate()
  const navigateToProducts = () => {
    navigate('/products')
  }
  
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
      <Button onClick={navigateToProducts}><KeyboardBackspaceIcon className="back_button"/></Button>
    </div>
  );
};

export default SingleProduct;
