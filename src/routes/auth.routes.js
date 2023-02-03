import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from "../screens/sign-in";
import Register from "../screens/register";
import Home from "../screens/home";
import PregnancyTest from "../screens/pregnancy-test";
import Prescription from "../screens/prescription";
import BloodExam from "../screens/blood-exam";
import ColonExam from "../screens/colon-exam";
import Profile from "../screens/profile";
import ShopCart from "../screens/shop-cart";
import Consult from "../screens/consult";
import Notification from "../screens/notification";
import Menu from "../components/Menu";

const AuthStack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
      <AuthStack.Navigator initialRouteName="Log in">
        <AuthStack.Screen name="Sign in" component={SignIn} />
        <AuthStack.Screen name="Registrar" component={Register} />
        <AuthStack.Screen name="Carrinho" component={ShopCart} />
        <AuthStack.Screen name="Perfil" component={Profile} />
        <AuthStack.Screen name="Notificações" component={Notification} />
      </AuthStack.Navigator>
  );
};

export default App;
