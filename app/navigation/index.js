import { useSelector } from "react-redux";
import { selectUser } from "../store/user";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

const Navigation = (props) => {
  const user = useSelector(selectUser());

  return (
    <NavigationContainer>
      {user ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
