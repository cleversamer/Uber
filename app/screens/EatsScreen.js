import { Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import withStatusBarPadding from "../hoc/withStatusBarPadding";

const EatsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Eats Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default withStatusBarPadding(EatsScreen);
