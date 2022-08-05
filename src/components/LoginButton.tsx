import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useAppDispatch } from "../redux/hooks/appHooks";
import { login } from "../redux/reducers/userReducer";
import { User } from "../redux/types/user";
import '../styles/pages/login.scss'

const LoginButton = () => {
  const dispatch = useAppDispatch()
  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if('profileObj' in response) {
      const user:User = {
      firstName: response.profileObj.givenName, 
      lastName: response.profileObj.familyName, 
      id: response.profileObj.googleId, 
      email: response.profileObj.email
      }
      dispatch(login(user))
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
