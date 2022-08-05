import { useNavigate } from "react-router-dom";
import "../styles/pages/home.scss";

function Home() {
  const navigate = useNavigate()
  const navigateToProducts = () => {
    navigate('/products')
  }

  return (
    <div className="homepage">
      <div>
        <h1>Welcome to easy shopping</h1>
      </div>
      <div>
        <h1>Best online store in town</h1>
      </div>
      <div>
        <button onClick={navigateToProducts} className="button_shopping">Start shopping</button>
      </div>
    </div>
  );
}

export default Home;
