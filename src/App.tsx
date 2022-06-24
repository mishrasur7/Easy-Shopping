import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchProducts } from "./redux/reducers/productReducer";

function App() {
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.productReducer)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  console.log(products)

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
