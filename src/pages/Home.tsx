import { useAppSelector } from "../redux/hooks/appHooks";
import AddProduct from "../components/AddProduct";
import SearchProducts from "../components/SearchProducts";

function Home() {
  const products = useAppSelector((state) => state.productReducer);
  
  return (
    <div style={{margin: '1em 5em'}}>
      <AddProduct />
      <SearchProducts />
    </div>
  );
}

export default Home;
