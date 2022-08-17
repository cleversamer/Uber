import "react-native-gesture-handler";
import { useEffect } from "react";
import configureStore from "./app/store/configureStore";
import { Provider } from "react-redux";
import Navigation from "./app/navigation";

const store = configureStore();

const App = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {});

    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
