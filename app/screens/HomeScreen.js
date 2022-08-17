import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Screen from "../components/Screen";
import colors from "../config/colors";

const HomeScreen = (props) => {
  return (
    <Screen style={styles.container}>
      <StatusBar style="light" />

      <Text>Home Screen</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default HomeScreen;
