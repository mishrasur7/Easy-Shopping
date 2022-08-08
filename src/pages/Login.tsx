import { TextField, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LoginButton from '../components/LoginButton'

function Login() {
  const navigate = useNavigate()
  const register = () => {
    navigate('/register')
  }
 
  return (
    <div>
        <form className='login_form'>
            <TextField
            placeholder='Enter your username'
            label='Username'
            variant='standard'
            />
             <TextField
            placeholder='Enter your password'
            label='Password'
            variant='standard'
            />
            <Button variant='contained'>Login</Button>
            <Typography>Not a user yet? <Button onClick={register}>Register here!</Button></Typography>
            <Typography>_______Or continue with_______</Typography>
            <LoginButton />
        </form>
    </div>
  )
}

export default Login