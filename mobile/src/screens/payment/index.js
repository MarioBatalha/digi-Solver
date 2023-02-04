import { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Payment = ({ navigation }) => {
  return (
    <View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Dados de pagamento</Text>
        <Text style={styles.title}>Preencha com os dados do cartão</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Pagamento")}
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
