import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

import Doctor from "../../assets/img/doctor-3.png";
import DoctorSpecialist from "../../assets/img/doctor-2.webp";

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <Text style={styles.title}>Testes no cubico</Text>
        <Text>Porque a sua saúde começa em casa, Levamos até si.</Text>
        <View style={styles.imageContainer}>
          <Image source={Doctor} style={styles.firstImage} />
          <Image source={DoctorSpecialist} style={styles.secondImage} />
        </View>
        <View style={styles.startContainer}>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Login')}>
            <Text>
              <AntDesign name="arrowright" size={30} color="white" />
            </Text>
          </TouchableOpacity>
          <Text style={styles.getStart}>Vamos começar!</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#189AB4",
    margin: 0,
    padding: 0,
  },

  homeContainer: {
    margin: 10,
    padding: 10,
  },

  title: {
    textAlign: "left",
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 40,
    fontWeight: "bold",
    color: "#05445E",
  },

  subtitle: {
    fontSize: 20,
  },

  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 10,
  },

  firstImage: {
    width: 150,
    height: 300,
    margin: 10,
    borderRadius: "25px",
    backgroundColor: "#75E6DA",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  secondImage: {
    width: 150,
    height: 300,
    margin: 10,
    marginTop: 200,
    borderRadius: "25px",
    backgroundColor: "#D4F1F4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  startContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius:'50%',
    backgroundColor: '#05445E',
  },

  getStart: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },

});
