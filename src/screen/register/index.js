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
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>
        Crie uma conta e explore das nossas soluções.
      </Text>
      <View style={styles.loginContainer}>
        <TextInput
          textContentType="emailAddress"
          placeholder="Nome do usuário"
          style={styles.input}
        />
        <TextInput
          textContentType="emailAddress"
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          textContentType="password"
          placeholder="Palavra-passe"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.touchableValue}>Registrar</Text>
        </TouchableOpacity>
        <View style={styles.noAccount}>
          <TouchableOpacity
            style={styles.createAccount}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.subtitle}>Já tenho uma conta? Entre.</Text>
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
    borderColor: '#FFF',
    borderWidth: 3,
    borderRadius: "5px",
    color: "#05445E",
    backgroundColor: "#FFF",
    width: 390,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  button: {
    padding: 13,
    margin: 5,
    width: 390,
    borderRadius: '5px',
    color: '#FFF',
    backgroundColor: '#05445E',
  },

  touchableValue: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },

  login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: 10,
    backgroundColor: "#FFF",
  },

  loginContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "68%",
    marginTop: 50,
    padding: 30,
    borderRadius: "30px",
    backgroundColor: "#189AB4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  logoImg: {
    margin: 20,
    width: 200,
    height: 100,
  },

  title: {
    textAlign: "left",
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 30,
    fontWeight: "bold",
    color: "#05445E",
  },

  subtitle: {
    fontSize: 15,
    margin: 2,
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
