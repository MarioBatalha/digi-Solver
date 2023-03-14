import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../style";
export const Prescription = () => {
  const [image, setImage] = useState(null);
  const { navigate } = useNavigation();

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

  const handleSaveImage = () => {
    Alert.alert("Receita salva com sucesso");
    navigate("Home");
  };

  return (
    <View style={styles.prescriptionContainer}>
      <Button title="Adicionar receita" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 400, height: 650 }} />
      )}
      {image && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.prescriptionButton}
          onPress={handleSaveImage}
        >
          <Text style={styles.prescriptionTouchableValue}>Salvar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
