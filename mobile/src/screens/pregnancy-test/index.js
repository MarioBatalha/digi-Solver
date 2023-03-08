import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../../../style";
export const PregnancyTest = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  const [pregnancy, setPregnancy] = useState([
    {
      name: "Teresa Ventura",
      price: 22000,
      date: formattedToday,
      phone: 92323456,
    },
  ]);

  const handlePregnancyTest = async () => {
    setPregnancy([
      ...pregnancy,
      {
        type: "Test de grávidez",
        name: "Maria Rosa",
        date: formattedToday,
        price: 2200,
        phone: 923110011,
      },
    ]);
  };
  return (
    <View style={styles.pregnancyContainer}>
      <Text style={styles.pregnancyTitle}>Teste de gravidez</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.pregnancyContent}>
          {pregnancy.map((item) => {
            return (
              <Text
                style={styles.pregnancyInput}
              >{`${item.name} - ${item.price} AOA - ${item.date}`}</Text>
            );
          })}
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.pregnancyButton}
          onPress={handlePregnancyTest}
        >
          <Text style={styles.pregnancyTouchableValue}>Adiconar receita</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
