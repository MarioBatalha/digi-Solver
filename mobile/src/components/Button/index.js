import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../../style";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonTouchableValue}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
