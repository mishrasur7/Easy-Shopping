import { useEffect, useState } from "react";
import { Product } from "../types/product";

const useProduct = (productId: string | undefined) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  useEffect(() => {
    if(productId) {
        fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [productId])
  return product;
};

export default useProduct;
