import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./src/screen/main";
import LogIn from "./src/screen/login";
import Register from "./src/screen/register";
import Home from "./src/screen/home";
import PregnancyTest from "./src/screen/pregnancy-test";
import Prescription from "./src/screen/prescription";
import BloodExam from "./src/screen/blood-exam";
import ColonExam from "./src/screen/colon-exam";
import Profile from "./src/screen/profile";
import ShopCart from "./src/screen/shop-cart";
import Consult from "./src/screen/consult";
import Notification from "./src/screen/notification";

import Routes from "./src/routes";

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
