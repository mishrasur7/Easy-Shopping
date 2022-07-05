import { useAppSelector } from "../redux/hooks/appHooks";

function Home() {
  const products = useAppSelector((state) => state.productReducer);
  
  return (
    <div style={{margin: '1em 5em'}}>
      Home page will be updated at last. 
    </div>
  );
}

export default Home;
