import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../style";
export const BloodExam = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <View style={styles.loginContainer}>
        <Text style={styles.bloodTestTitle}>Teste de sangue</Text>
        <TextInput placeholder="Nome completo" style={styles.input} />
        <TextInput
          placeholder="Numero de emergencia"
          keyboardType="name"
          style={styles.bloodTestInput}
        />
        <TextInput
          maxLength={15}
          placeholder="Tipo de exame"
          keyboardType="name"
          secureTextEntry
          style={styles.bloodTestInput}
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
          style={styles.bloodTestInput}
        />
        <TextInput
          multiline
          placeholder="É alergico a alguma substância"
          style={styles.bloodTestInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.bloodTestButton}
          onPress={() => navigate("Pagamento")}
        >
          <Text style={styles.bloodTestTouchableValue}>Solicitar teste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
