import "react-native-gesture-handler";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./app/navigation/AppNavigation";
import AuthNavigation from "./app/navigation/AuthNavigation";
import AuthContext from "./app/auth/context";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
