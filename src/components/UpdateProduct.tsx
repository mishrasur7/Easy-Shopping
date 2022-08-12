import { useState } from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { useAppDispatch } from "../redux/hooks/appHooks";
import { updateProduct } from "../redux/reducers/productReducer";

const UpdateProduct = () => {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
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
    // dispatch(updateProduct(product));
    setProduct({
      id: "",
      title: "",
      price: "",
    });
    setOpen(false);
  };

  //common function to save each input data into product state
  const inputchanged = (event: any) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update product</DialogTitle>
        <DialogContentText style={{ marginLeft: 25 }}>
          Please update if it needs.
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateProduct;
