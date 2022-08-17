import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import EatsScreen from "../screens/EatsScreen";
import routes from "./routes";

const globalScreenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator screenOptions={globalScreenOptions}>
    <Stack.Screen name={routes.HOME} component={HomeScreen} />
    <Stack.Screen name={routes.MAP} component={MapScreen} />
    <Stack.Screen name={routes.EATS} component={EatsScreen} />
  </Stack.Navigator>
);

export default AppNavigation;
