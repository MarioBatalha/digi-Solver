import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.touchableValue}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;

const styles = StyleSheet.create({
    button: {
      padding: 13,
      margin: 5,
      width: 390,
      border: '1px solid black',
      borderRadius: '5px',
      color: '#FFF',
      backgroundColor: '#05445E',
    },
    touchableValue: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#FFF',
    }
})