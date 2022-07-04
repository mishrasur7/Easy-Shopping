import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../redux/hooks/useProduct'

const SingleProduct = () => {
    const { productId } = useParams()
    const product = useProduct(productId)
  return (
    <div>
        {product && (<div>{product.title}</div>)}
    </div>
  )
}

export default SingleProduct