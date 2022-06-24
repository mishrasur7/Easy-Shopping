import React from 'react'
import { Card, CardContent, CardMedia, CardHeader, Typography, Button } from '@mui/material'

import { useAppSelector } from '../redux/hooks'
import '../styles/pages/products.scss'

function Products() {
  const products = useAppSelector(state => state.productReducer)
  return (
    // this is just testing
    <div className='products'>
      {products.map(product => (
        <Card key={product.id} className='card'>
          <CardHeader title={product.title}/>
          <CardMedia
          component='img'
          image={product.category.image}
          />
          <CardContent>
            <Typography>Description: {product.description}</Typography>
            <Typography>Price: {product.price} $</Typography>
            <Button>Add to cart</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


export default Products