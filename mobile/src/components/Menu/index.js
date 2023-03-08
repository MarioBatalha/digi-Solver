import { View, TouchableOpacity } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../style";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.menuItem}
        onPress={() => navigate("Home")}
      >
        <FontAwesome name="home" size={35} color="#606060" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.menuItem}
        onPress={() => navigate("Notificações")}
      >
        <FontAwesome name="bell" size={35} color="#606060" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.menuItem}
        onPress={() => navigate("Carrinho")}
      >
        <FontAwesome name="shopping-cart" size={35} color="#606060" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.menuItem}
        onPress={() => navigate("Perfil")}
      >
        <Ionicons name="ios-person-circle-outline" size={35} color="#606060" />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
