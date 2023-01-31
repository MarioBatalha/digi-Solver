import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import ButtonComponent from "../../components/Button";
import Logo from "../../assets/img/digisolve-logo.png";

const LogIng = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <Image source={Logo} style={styles.logoImg} />
      <Text style={styles.loginTitle}>Log in</Text>
      <View style={styles.loginContainer}>
        <TextInput
          textContentType="emailAddress"
          placeholder="email"
          style={styles.input}
        />
        <TextInput
          textContentType="password"
          placeholder="Palavra-passe"
          style={styles.input}
        />
        <ButtonComponent
          title="Entrar"
          onPress={() => alert("Profile")}
        />
        <View style={styles.noAccount}>
            <TouchableOpacity
              style={styles.createAccount}
              onPress={() => navigation.navigate("Register")}
            >
              <Text>Não tem conta? Criar uma.</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogIng;

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 10,
    border: "1px solid black",
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

  login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },

  loginContainer: {
    marginTop: 30,
  },

  logoImg: {
    margin: 20,
    width: 200,
    height: 100,
  },
  loginTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#05445E",
  },

  noAccount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  createAccount: {
    justifyContent: "center",
    alignItems: "center",
  },
});
