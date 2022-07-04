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

import { useAppDispatch, useAppSelector } from "../redux/hooks/appHooks";
import "../styles/components/searchproduct.scss";
import UpdateProduct from "./UpdateProduct";
import { deleteProduct } from "../redux/reducers/productReducer";

function SearchProducts(): JSX.Element {
  const products = useAppSelector((state) => state.productReducer);
  const [searchtitle, setSearchTitle] = useState<string>("");
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const dispatch = useAppDispatch();
  const onDelete = (id: number | undefined) => {
    if (window.confirm("Are you sure that you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
    setOpen(true);
    setMessage("Product deleted successfully!");
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
                      margin: 20,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <UpdateProduct />
                    <Button
                      onClick={() => onDelete(value.id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
                  </Box>
                  <Button className="add__to--cart">Add to cart</Button>
                </CardContent>
              </Card>
            );
          })}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

export default SearchProducts;
