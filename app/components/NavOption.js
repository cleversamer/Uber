import { Image, Text } from "@rneui/themed";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useNavigation from "../navigation/useNavigation";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";

const NavOption = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => navigation.navigate(item.screen);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <AntDesign
          color={colors.white}
          name="arrowright"
          size={24}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`,
  image: {
    height: 120,
    resizeMode: "contain",
    width: 120,
  },
  title: tw`mt-2 text-lg font-semibold`,
  icon: tw`p-2 bg-black rounded-full w-10 mt-4`,
});

export default NavOption;
