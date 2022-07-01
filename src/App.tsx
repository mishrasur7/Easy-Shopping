import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import SingleProduct from "./pages/SingleProduct";
import { useAppDispatch, useAppSelector } from "./redux/hooks/appHooks";
import { fetchProducts } from "./redux/reducers/productReducer";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
