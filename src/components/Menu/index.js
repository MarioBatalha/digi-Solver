import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Menu = ({navigation}) => {
    return (
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('Home')}>
          <FontAwesome name="home" size={35} color="#606060" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notificações')}>
          <FontAwesome name="bell" size={35} color="#606060" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Carrinho')}>
          <FontAwesome name="shopping-cart" size={35} color="#606060" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Perfil')}>
          <Ionicons name="ios-person-circle-outline" size={35} color="#606060" />
          </TouchableOpacity>
        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    menuContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: '97%',
        margin: 5,
        backgroundColor: "#FFF",
        borderRadius: "25px",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 6,
      },
    
      menuItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        height: 60,
        width: 80,
        padding: 10,
      }
})