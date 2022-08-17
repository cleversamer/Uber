import { StyleSheet, View } from "react-native";
import { Image } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import Screen from "../components/Screen";
import NavOptions from "../components/NavOptions";
import withStatusBarPadding from "../hoc/withStatusBarPadding";
import NavigationContext from "../navigation/context";
import tw from "tailwind-react-native-classnames";

const HomeScreen = ({ navigation }) => {
  return (
    <NavigationContext.Provider value={navigation}>
      <Screen style={styles.container}>
        <StatusBar style="dark" />

        <View style={styles.content}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />

          <NavOptions />
        </View>
      </Screen>
    </NavigationContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: tw`bg-white h-full`,
  content: tw`p-5`,
  logo: {
    height: 100,
    resizeMode: "contain",
    width: 100,
  },
});

export default withStatusBarPadding(HomeScreen);
