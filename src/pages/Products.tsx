import AddProduct from "../components/AddProduct";
import SearchProducts from "../components/SearchProducts";
import "../styles/pages/products.scss";

function Products() {
  return (
    <div className="addProduct_searchProduct">
      <AddProduct />
      <SearchProducts />
    </div>
  );
}

export default Products;
