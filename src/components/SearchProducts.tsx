import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CardMedia,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  Snackbar,
} from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useAppDispatch, useAppSelector } from "../redux/hooks/appHooks";
import UpdateProduct from "./UpdateProduct";
import { deleteProductFromAPI } from "../redux/reducers/productReducer";
import PagePagination from "./PagePagination";
import { addToCart } from "../redux/reducers/cartReducer";

function SearchProducts(): JSX.Element {
  const products = useAppSelector((state) => state.productReducer);
  const [searchtitle, setSearchTitle] = useState<string>("");
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();
  const onDelete = (id: any) => {
    if (window.confirm("Are you sure that you want to delete this product?")) {
      dispatch(deleteProductFromAPI(id));
      setOpen(true);
      setMessage("Product deleted successfully!");
    }
  };

  const addProductToCart = (productId: number) => {
    if (productId) {
      fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
        .then((response) => response.json())
        .then((data) => dispatch(addToCart(data)));
    }
  };

  return (
    <div>
      <TextField
        variant="filled"
        className="textfield"
        type="text"
        name="title"
        value={searchtitle}
        label="Search products by title..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className="products">
        {products
          .filter((value) => {
            if (searchtitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchtitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((value, key) => {
            return (
              <Card key={value.id} className="card">
                <CardMedia
                  component="img"
                  image={value.images[0]}
                  onClick={() => navigate(`${value.id}`)}
                  sx={{ cursor: "pointer" }}
                />
                <CardContent>
                  <Typography>{value.title}</Typography>
                  <Typography>Price: {value.price} $</Typography>
                  <Box
                    style={{
                      marginTop: 20,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <UpdateProduct />
                    <IconButton onClick={() => onDelete(value.id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Box>
                  <Button
                    className="add__to--cart"
                    onClick={() => addProductToCart(value.id)}
                  >
                    Add to cart
                  </Button>
                </CardContent>
              </Card>
            );
          })}
      </div>
      <PagePagination />
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

export default SearchProducts;
