import AddProduct from "../components/AddProduct";
import PagePagination from "../components/PagePagination";
import SearchProducts from "../components/SearchProducts";

function Products() {
  return (
    <div style={{ margin: "1em 5em" }}>
      <AddProduct />
      <SearchProducts />
      <PagePagination />
    </div>
  );
}

export default Products;
