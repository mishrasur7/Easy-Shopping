import { useAppSelector } from "../redux/hooks/appHooks";

function Profile() {
  const user = useAppSelector((state) => state.userReducer.user);
  return (
    <div>
      {user ? (
        <div>
          <p>First name: {user.firstName}</p>
          <p>Last name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Google Id: {user.id}</p>
        </div>
      ) : (
        <div>Please log in first</div>
      )}
    </div>
  );
}

export default Profile;
