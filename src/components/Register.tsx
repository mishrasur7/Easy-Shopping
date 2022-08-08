import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import '../styles/components/register.scss'

function Register() {
    const navigate = useNavigate()
    const navigateToLoginPage = () => {
        navigate('/sign-in')
    }
  return (
    <div>
      <form className="register">
        <TextField
          placeholder="Enter your name"
          label="Name"
          variant="standard"
        />
        <TextField
          placeholder="Enter your password"
          label="Password"
          variant="standard"
        />
        <TextField
          placeholder="Enter your email"
          label="Email"
          variant="standard"
        />
        <TextField
          placeholder="Enter your avatar url"
          label="Avatar"
          variant="standard"
        />
        <Button onClick={navigateToLoginPage}>Register</Button>
      </form>
    </div>
  );
}

export default Register;
