import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./src/screens/main";
import LogIn from "./src/screens/login";
import Register from "./src/screens/register";
import Home from "./src/screens/home";
import PregnancyTest from "./src/screens/pregnancy-test";
import Prescription from "./src/screens/prescription";
import BloodExam from "./src/screens/blood-exam";
import ColonExam from "./src/screens/colon-exam";
import Profile from "./src/screens/profile";
import ShopCart from "./src/screens/shop-cart";
import Consult from "./src/screens/consult";
import Notification from "./src/screens/notification";
import AuthContext from "./src/contexts/auth";

import Routes from "./src/routes";

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
      <NavigationContainer>
        <AuthContext.Provider value={{
          loggedIn: true
        }}>
          <Routes />
        </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
