import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

import Logo from "../../assets/img/digisolve-logo.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./../../../firebase.config";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password, name)
      .then(() => {
        Alert.alert("conta criada com sucesso");
        navigation.navigate("Home");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("email já está registrado");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("Endereço inválido");
        }
        Alert.alert(error);
      });
  };
  return (
    <View style={styles.login}>
      <Image source={Logo} style={styles.logoImg} />
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>
        Crie uma conta e explore das nossas soluções.
      </Text>
      <View style={styles.loginContainer}>
        <TextInput placeholder="Nome completo" value={name} style={styles.input} />
        <TextInput
          placeholder="Email"
          keyboardType="name"
          value={email}
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          maxLength={15}
          placeholder="Password"
          value={password}
          keyboardType="visible-password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.inputGroup}>
          <TextInput
            maxLength={4}
            placeholder="Peso"
            keyboardType="numeric"
            style={styles.inputItems}
          />
          <TextInput
            maxLength={4}
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.inputItems}
          />
          <TextInput
            maxLength={3}
            placeholder="Idade"
            keyboardType="numeric"
            style={styles.inputItems}
          />
        </View>
        <TextInput
          maxLength={12}
          placeholder="Telefone"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          multiline
          placeholder="É alergico a alguma substância"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.touchableValue}>Registrar</Text>
        </TouchableOpacity>
        <View style={styles.noAccount}>
          <TouchableOpacity
            style={styles.createAccount}
            onPress={() => navigation.navigate("Sign in")}
          >
            <Text style={styles.subtitle}>Já tenho uma conta? Entre.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 5,
    borderColor: "#FFF",
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
    borderRadius: "5px",
    color: "#FFF",
    backgroundColor: "#05445E",
  },

  touchableValue: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },

  login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFF",
    width: "100%",
    padding: 10,
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

  inputGroup: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  inputItems: {
    padding: 15,
    margin: 5,
    borderColor: "#FFF",
    borderWidth: 3,
    borderRadius: "5px",
    color: "#05445E",
    backgroundColor: "#FFF",
    width: 123,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
