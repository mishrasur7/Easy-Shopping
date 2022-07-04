//dependencies imported
import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";


import { useAppDispatch } from "../redux/hooks/appHooks";
import { addProduct } from "../redux/reducers/productReducer";

function AddProduct() {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    images: [],
  });

  //open state set to false
  const [open, setOpen] = useState<boolean>(false);

  //sets open state to true
  const handleClickOpen = () => {
    setOpen(true);
  };

  //closes the dialogue box
  const handleClose = () => {
    setOpen(false);
  };

  //saves product data and closes the dialogue box
  const handleSave = () => {
    dispatch(addProduct(product));
    setProduct({
      id: "",
      title: "",
      price: "",
      images: [],
    });
    setOpen(false);
  };

  //common function to save each input data into product state
  const inputchanged = (event: any) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new product</DialogTitle>
        <DialogContentText style={{ marginLeft: 25 }}>
          Please fill in each product details.
        </DialogContentText>
        <DialogContent>
          <TextField
            margin="dense"
            name="id"
            value={product.id}
            onChange={inputchanged}
            label="Product id"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="title"
            value={product.title}
            onChange={inputchanged}
            label="Product title"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="price"
            value={product.price}
            onChange={inputchanged}
            label="Product price"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="images"
            value={product.images}
            onChange={inputchanged}
            label="image url"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddProduct;
