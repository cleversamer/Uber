import { StyleSheet, View, FlatList } from "react-native";
import NavOption from "./NavOption";
import routes from "../navigation/routes";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: require("../assets/white-car.webp"),
    screen: routes.MAP,
  },
  {
    id: "456",
    title: "Order food",
    image: require("../assets/fries.png"),
    screen: routes.EATS,
  },
];

const NavOptions = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NavOption item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NavOptions;
