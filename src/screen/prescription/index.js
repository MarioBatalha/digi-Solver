import React, { useState, useEffect } from "react";
import { Button, Image, View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Prescription = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const  handleSaveImage = () => {
    Alert.alert('Receita salva com sucesso');
  }

  return (
    <View style={styles.container}>
      <Button title="Adicionar receita" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {image && (<TouchableOpacity style={styles.button} onPress={handleSaveImage}>
        <Text style={styles.touchableValue}>Salvar</Text>
      </TouchableOpacity>) }
    </View>
  );
};

export default Prescription;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
