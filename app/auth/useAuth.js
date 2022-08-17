import { useSelector, useDispatch } from "react-redux";
import { selectUser, loginUser, logoutUser } from "../store/user";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser());

  const login = (user) => {
    try {
      // Logic for decoding token, getting user object,
      // and store it in SecureStore.
      // Or calling one of firebase authentication methods.
      dispatch(loginUser(user));
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    try {
      dispatch(logoutUser());
    } catch (err) {
      throw err;
    }
  };

  return { user, login, logout };
};

export default useAuth;
