import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const BloodExam = ({ navigation }) => {
  return (
    <View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Teste de sangue</Text>
        <TextInput placeholder="Nome completo" style={styles.input} />
        <TextInput
          placeholder="Numero de emergencia"
          keyboardType="name"
          style={styles.input}
        />
        <TextInput
          maxLength={15}
          placeholder="Tipo de exame"
          keyboardType="name"
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
            placeholder="Grupo sanguíneo"
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Pagamento")}
        >
          <Text style={styles.touchableValue}>Solicitar teste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BloodExam;

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
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  touchableValue: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: 50,
    padding: 30,
    
  },

  title: {
    textAlign: "left",
    fontFamily: "Inter-SemiBoldItalic",
    fontSize: 30,
    fontWeight: "bold",
    color: "#05445E",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    margin: 2,
  },

  inputGroup: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
  button: {
    padding: 13,
    margin: 5,
    width: 390,
    borderRadius: "5px",
    color: "#FFF",
    backgroundColor: "#05445E",
  },
});
