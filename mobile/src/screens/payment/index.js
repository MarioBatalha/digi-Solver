import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import VisaCard from "../../assets/img/visa.png";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../style";

export const Payment = () => {
  const { navigate } = useNavigation();
  const handlePayment = async () => {
    setTimeout(() => {
      Alert.alert("Pagamento feito com sucesso");
      navigate("Home");
    }, 2000);
  };
  return (
    <View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Dados de pagamento</Text>
        <Text style={styles.paymentSubtitle}>
          Preencha com os dados do cartão
        </Text>
        <Image source={VisaCard} width={200} height={200} />
        <TextInput
          maxLength={16}
          placeholder="4242-4333-2980-3333"
          keyboardType="numeric"
          style={styles.paymentInput}
        />
        <View style={styles.paymentInputGroup}>
          <TextInput
            maxLength={4}
            placeholder="MM/YYYY"
            keyboardType="numeric"
            style={styles.paymentInputItems}
          />

          <TextInput
            maxLength={4}
            placeholder="CVC"
            keyboardType="numeric"
            style={styles.paymentInputItems}
          />
        </View>
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={handlePayment}
          activeOpacity={0.7}
        >
          <Text style={styles.paymentTouchableValue}>Concluír pagamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
