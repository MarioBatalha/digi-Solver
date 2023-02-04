import {  useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import{ getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../../firebase.config';

import Logo from "../../assets/img/digisolve-logo.png";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Alert.alert('Bem-vindo de volta.')
      const user = userCredential.user;
      navigation.navigate('Home')
      console.table(user)
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        Alert.alert('Endereço inválido');
      }
      Alert.alert(error);
    });
      console.log(error)
      Alert.alert(err)
  }

  return (
    <View style={styles.login}>
      <Image source={Logo} style={styles.logoImg} />
      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>
        Entre e peça novos exames ou receitas.
      </Text>
      <View style={styles.loginContainer}>
        <TextInput
           placeholder="Email"
           value={email}
           onChangeText={(text) => setEmail(text)}
           keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          keyboardType="visible-password"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={styles.touchableValue}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGoogle}
        >
          <Text style={styles.touchableValueGoogle}>Usar conta google</Text>
          <AntDesign name="google" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.noAccount}>
          <TouchableOpacity
            style={styles.createAccount}
            onPress={() => navigation.navigate("Registrar")}
          >
            <Text style={styles.subtitle}>Não tem uma conta? Criar uma.</Text>
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
    margin: 10,
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

  login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFF",
    width: "100%",
    height: "97%",
    padding: 10,
   
  },

  loginContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "71%",
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

  buttonGoogle: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    margin: 5,
    width: 390,
    borderRadius: "5px",
    color: "#FFF",
    backgroundColor: "#E24033",
  },

  touchableValueGoogle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 5,
    color: "#FFF",
  },
});
