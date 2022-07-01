import { Button, CardHeader, CardMedia, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from '@mui/material';

import { useAppSelector } from "../redux/hooks/appHooks";
import '../styles/components/searchproduct.scss'


function SearchProducts(): JSX.Element {
  const products = useAppSelector((state) => state.productReducer);
  const [searchtitle, setSearchTitle] = useState<string>("");
  const navigate = useNavigate()

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
              <CardHeader title={value.title} />
              <CardMedia component="img" image={value.images[0]} onClick ={() => navigate(`${value.id}`)} sx={{cursor: "pointer"}}/>
              <CardContent>
                <Typography>Description: {value.title}</Typography>
                <Typography>Price: {value.price} $</Typography>
                <Button>Add to cart</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default SearchProducts;
