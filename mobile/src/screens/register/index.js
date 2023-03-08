import { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/img/digisolve-logo.png";
import { styles } from "../../../style";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { navigate } = useNavigation();
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("conta criada com sucesso");
        navigate("Home");
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
    <View style={styles.registerLogin}>
      <Image source={Logo} style={styles.logoImg} />
      <Text style={styles.registerTitle}>Bem-vindo</Text>
      <Text style={styles.registerSubtitle}>
        Crie uma conta e explore das nossas soluções.
      </Text>
      <View style={styles.registerLoginContainer}>
        <TextInput
          placeholder="Nome completo"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.registerInput}
        />
        <TextInput
          placeholder="Email"
          keyboardType="name"
          value={email}
          style={styles.registerInput}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          maxLength={15}
          placeholder="Password"
          value={password}
          keyboardType="visible-password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.registerInput}
        />
        <View style={styles.registerInputGroup}>
          <TextInput
            maxLength={4}
            placeholder="Peso"
            keyboardType="numeric"
            style={styles.registerInputItems}
          />
          <TextInput
            maxLength={4}
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.registerInputItems}
          />
          <TextInput
            maxLength={3}
            placeholder="Idade"
            keyboardType="numeric"
            style={styles.registerInputItems}
          />
        </View>
        <TextInput
          maxLength={12}
          placeholder="Telefone"
          keyboardType="numeric"
          style={styles.registerInput}
        />
        <TextInput
          multiline
          placeholder="É alergico a alguma substância"
          style={styles.registerInput}
        />
        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.7}
          onPress={handleCreateAccount}
        >
          <Text style={styles.registerTouchableValue}>Registrar</Text>
        </TouchableOpacity>
        <View style={styles.noAccount}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.createAccount}
            onPress={() => navigate("Sign in")}
          >
            <Text style={styles.registerSubtitle}>
              Já tenho uma conta? Entre.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
