import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { useAppDispatch } from "./redux/hooks/appHooks";
import { fetchProducts } from "./redux/reducers/productReducer";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ offset: 0, limit: 21 }));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route path="" element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
