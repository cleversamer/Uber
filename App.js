import "react-native-gesture-handler";
import configureStore from "./app/store/configureStore";
import { Provider } from "react-redux";
import Navigation from "./app/navigation";
import { StatusBar } from "expo-status-bar";
import useLoading from "./app/hooks/useLoading";

const store = configureStore();

const App = () => {
  const loading = useLoading(true);

  return loading ? (
    <StatusBar style="light" />
  ) : (
    <Provider store={store}>
      <StatusBar style="light" />
      <Navigation />
    </Provider>
  );
};

export default App;
