import { Link } from "react-router-dom";

import '../styles/components/navbar.scss'
import LoginButton from "./LoginButton";

function NavBar() {
  const linkStyle = {
    textDecoration: 'none', 
    color: 'black',
    fontSize: '1.3em'
  }
  return (
    <div className="main_nav">
    <div className="navbar">
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/products" style={linkStyle}>Products</Link>
      <Link to="/profile" style={linkStyle}>Profile</Link>
      <Link to="/cart" style={linkStyle}>Cart</Link>
    </div>
    <LoginButton />
    </div>
  );
}

export default NavBar;
