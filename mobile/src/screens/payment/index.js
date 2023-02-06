import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import VisaCard from "../../assets/img/visa.png";

const Payment = ({ navigation }) => {
  const handlePayment = async () => {
    setTimeout(() => {
      Alert.alert('Pagamento feito com sucesso')
      navigation.navigate("Home")
    }, 2000)
  }
  return (
      <View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Dados de pagamento</Text>
        <Text style={styles.subtitle}>Preencha com os dados do cartão</Text>
        <Image source={VisaCard} width={200} height={200}/>
        <TextInput
          maxLength={16}
          placeholder="4242-4333-2980-3333"
          keyboardType="numeric"
          style={styles.input}
        />
        <View style={styles.inputGroup}>
          <TextInput
            maxLength={4}
            placeholder="MM/YYYY"
            keyboardType="numeric"
            style={styles.inputItems}
          />

        <TextInput
            maxLength={4}
            placeholder="CVC"
            keyboardType="numeric"
            style={styles.inputItems}
          />  
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePayment}
        >
          <Text style={styles.touchableValue}>Concluír pagamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

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
    width: 190,
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
