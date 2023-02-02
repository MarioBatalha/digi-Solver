import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import UserImage from "../../assets/img/doctor.jpeg";
import Pregnancy from "../../assets/img/pregnant.jpeg";
import Prescription from "../../assets/img/prescription.png";
import Clinic from "../../assets/img/clinic.png";
import Doctor from "../../assets/img/doctor-injection.png";

const SquareView = (props) => {
  return (
    <View
      style={{
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileContent}>
        <Text style={styles.title}>Olá, Mário Batalha</Text>
        <Image source={UserImage} style={styles.avatar} />
      </View>
      <View style={styles.testContainer}>
        <TextInput
          textContentType="name"
          placeholder="Procurar por exames ou receitas..."
          style={styles.input}
        />
        <Text style={styles.popular}>Testes populares</Text>
        <View style={styles.testContent}>
          <TouchableOpacity style={styles.test} onPress={() => navigation.navigate("Teste de grávidez")}>
            <Image source={Pregnancy} style={styles.testImage} />
            <View style={styles.testIcon}>
              <AntDesign name="plus" size={24} color="black" />
            </View>
            <View style={styles.testDescription}>
              <Text style={styles.subtitle}>Teste de grávidez</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.test} onPress={() => navigation.navigate('Nova receita')}>
            <Image source={Prescription} style={styles.testImage} />
            <View style={styles.testIcon}>
              <AntDesign name="plus" size={24} color="black" />
            </View>
            <View style={styles.testDescription}>
              <Text style={styles.subtitle}>Receitas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.test} onPress={() => navigation.navigate('Exames de sangue')}>
            <Image source={Doctor} style={styles.testImage} />
            <View style={styles.testIcon}>
              <AntDesign name="plus" size={24} color="black" />
            </View>
            <View style={styles.testDescription}>
              <Text style={styles.subtitle}>Exames de sangue</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.test} onPress={() => navigation.navigate('Exame do colón')}>
            <Image source={Clinic} style={styles.testImage} />
            <View style={styles.testIcon}>
              <AntDesign name="plus" size={24} color="black" />
            </View>
            <View style={styles.testDescription}>
              <Text style={styles.subtitle}>Exames do colón</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.popular}>O que precisas?</Text>
        <ScrollView horizontal={true}>
          <SquareView size={80}>
            <TouchableOpacity style={styles.needDesc} onPress={() => navigation.navigate('Consultas')}>
              <Fontisto name="doctor" size={25} color="#189AB4" />
              <Text style={styles.needTitle}>Doctor</Text>
            </TouchableOpacity>
          </SquareView>
          <SquareView size={80}>
            <TouchableOpacity style={styles.needDesc}>
              <Fontisto name="pills" size={25} color="#189AB4" />
              <Text style={styles.needTitle}>Medicação</Text>
            </TouchableOpacity>
          </SquareView>
          <SquareView size={80}>
            <TouchableOpacity style={styles.needDesc}>
              <FontAwesome5 name="ambulance" size={25} color="#189AB4" />
              <Text style={styles.needTitle}>Ambulancia</Text>
            </TouchableOpacity>
          </SquareView>
          <SquareView size={80}>
            <TouchableOpacity style={styles.needDesc}>
              <Fontisto name="injection-syringe" size={25} color="#189AB4" />
              <Text style={styles.needTitle}>Vacinas</Text>
            </TouchableOpacity>
          </SquareView>
          <SquareView size={80}>
            <TouchableOpacity style={styles.needDesc}>
              <MaterialCommunityIcons
                name="hospital-box-outline"
                size={25}
                color="#189AB4"
              />
              <Text style={styles.needTitle}>Hospitais</Text>
            </TouchableOpacity>
          </SquareView>
          <SquareView size={80}>
            <TouchableOpacity style={styles.needDesc}>
              <FontAwesome5 name="heartbeat" size={25} color="#189AB4" />
              <Text style={styles.needTitle}>Pressão</Text>
            </TouchableOpacity>
          </SquareView>
        </ScrollView>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="home" size={35} color="#7D7D86" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notificações')}>
          <FontAwesome name="bell" size={35} color="#7D7D86" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Carrinho')}>
          <FontAwesome name="shopping-cart" size={35} color="#7D7D86" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Log in')}>
          <Ionicons name="ios-person-circle-outline" size={35} color="#7D7D86" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 0,
    margin: 0,
    height: "100%",
  },

  profileContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    margin: 10,
  },

  title: {
    textAlign: "left",
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 25,
    fontWeight: "bold",
    color: "#05445E",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 15,
    margin: 2,
    fontWeight: "bold",
  },

  popular: {
    textAlign: "left",
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 25,
    marginLeft: 15,
    margin: 5,
    fontWeight: "bold",
    color: "#000",
  },

  needTitle: {
    fontSize: 11,
    margin: 2,
    fontWeight: "bold",
    color: "#000",
  },

  input: {
    padding: 12,
    margin: 5,
    borderColor: "#75E6DA",
    borderWidth: 1,
    borderRadius: "5px",
    color: "#05445E",
    backgroundColor: "#FFF",
    width: 380,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  avatar: {
    borderRadius: "50%",
    height: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  testContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
    margin: 10,
  },

  testContent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "stretch",
    alignItems: "center",
    padding: 10,
  },

  test: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: "20px",
    padding: 10,
    margin: 10,
    width: 170,
    height: 170,
    borderWidth: 1,
    borderColor: "#75E6DA",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  testIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: "50%",
    backgroundColor: "#F2F2F2",
  },

  testDescription: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  testImage: {
    width: "95%",
    height: "80%",
    margin: 5,
  },

  needDesc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

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
});
