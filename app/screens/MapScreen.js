import { Text } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import withStatusBarPadding from "../hoc/withStatusBarPadding";

const MapScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Maps Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default withStatusBarPadding(MapScreen);
