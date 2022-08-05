import AddProduct from "../components/AddProduct";
import SearchProducts from "../components/SearchProducts";

function Products() {
  return (
    <div style={{ margin: "1em 5em" }}>
      <AddProduct />
      <SearchProducts />
    </div>
  );
}

export default Products;
