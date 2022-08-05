import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "../styles/components/navbar.scss";
import LoginButton from "./LoginButton";

function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "1.3em",
  };
  return (
    <div className="main_nav">
      <div className="navbar_home_products">
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/products" style={linkStyle}>
          Products
        </Link>
      </div>
      <div className="navbar_login_cart_theme">
        <Link to="/sign-in" style={linkStyle}>
          Login
        </Link>
        <Link to="/cart" style={linkStyle}>
          <AddShoppingCartIcon />
        </Link>
        <Link to="/theme" style={linkStyle}>
          Theme
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
