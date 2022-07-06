import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

const LoginButton = () => {
    
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    
  };

  return (
    <div>
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
