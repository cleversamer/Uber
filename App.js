import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import configureStore from "./app/store/configureStore";
import { Provider } from "react-redux";
import Navigation from "./app/navigation";
import { StatusBar } from "expo-status-bar";
import settings from "./app/config/settings";

const store = configureStore();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, settings.splashViewTime);

    return clearTimeout;
  }, []);

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
