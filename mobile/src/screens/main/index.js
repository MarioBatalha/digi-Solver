import { View, Image, Text, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Doctor from "../../assets/img/doctor-3.png";
import DoctorSpecialist from "../../assets/img/doctor-2.webp";

import { styles } from "../../../style";

export const Main = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <Text style={styles.mainTitle}>Testes no cubico</Text>
        <Text style={styles.mainSubtitle}>
          Porque a sua saúde começa em casa, Levamos até si.
        </Text>
        <View style={styles.imageContainer}>
          <Image source={Doctor} style={styles.firstImage} />
          <Image source={DoctorSpecialist} style={styles.secondImage} />
        </View>
        <View style={styles.startContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.icon}
            onPress={() => navigate("Home")}
          >
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
