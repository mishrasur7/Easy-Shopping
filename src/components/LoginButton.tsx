import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useAppDispatch } from "../redux/hooks/appHooks";
import { login } from "../redux/reducers/userReducer";
import { Login, User } from "../redux/types/user";

const LoginButton = () => {
  const dispatch = useAppDispatch()
  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if('profileObj' in response) {
      const user:User = {
      id: response.profileObj.googleId,
      firstName: response.profileObj.givenName, 
      lastName: response.profileObj.familyName, 
      email: response.profileObj.email,
      password: undefined,
      role: 'customer', 
      avatar: undefined
      } 

      const userLogin:Login = {
        email: user.email,
        password: user.password
      }

      dispatch(login(userLogin))
    }
  };

  return (
    <div className="login">

      <GoogleLogin
        clientId="799545640286-5nturnrrd43mb260cbuen1btfkfnkuqb.apps.googleusercontent.com"
       // 729884898728-j7ui1155atevur8s8e3fr5f8b30vvs89.apps.googleusercontent.com
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginButton;
