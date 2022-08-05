import { TextField, Button, Typography } from '@mui/material'
import LoginButton from '../components/LoginButton'

function Login() {
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
            <Button>Login</Button>
            <Typography>_______Or continue with_______</Typography>
            <LoginButton />
        </form>
    </div>
  )
}

export default Login