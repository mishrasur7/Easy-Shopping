import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

import { useAppSelector } from "../redux/hooks/appHooks";

const Cart = () => {
  const cart = useAppSelector((state) => state.cartReducer);
  const productsInCart = cart.products;
  console.log("productsincart", productsInCart);
  const totalProducts = cart.total;

  //calculates total amount of price in cart
  let totalAmount = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    totalAmount += productsInCart[i].price;
  }

  return (
    <div className="cart_table">
      <div className="cart_content">
      {productsInCart.map((value, key) => {
        return (
          <Card className="cart_content-card">
            <CardHeader title={value.title}/>
            <CardMedia component='img' image={value.images[0]}/>
            <br />
            <Typography>{value.price}$</Typography>
            <CardActions>
              <Button><AddIcon/></Button>
              <Button><RemoveIcon /></Button>
              <Button><DeleteIcon color="error"/></Button>
            </CardActions>
          </Card>
        );
      })}
      </div>
      <table className="total">
        <tr className="total_headings">
          <th>Total number of products</th>
          <th>Amount total</th>
        </tr>
        <tr className="total_numbers">
          <td>{totalProducts}</td>
          <td>{totalAmount} $</td>
        </tr>
      </table>
    </div>
  );
};

export default Cart;
