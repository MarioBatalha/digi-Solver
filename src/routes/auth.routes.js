import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from "../screen/login";
import Register from "../screen/register";
import Home from "../screen/home";
import PregnancyTest from "../screen/pregnancy-test";
import Prescription from "../screen/prescription";
import BloodExam from "../screen/blood-exam";
import ColonExam from "../screen/colon-exam";
import Profile from "../screen/profile";
import ShopCart from "../screen/shop-cart";
import Consult from "../screen/consult";
import Notification from "../screen/notification";
import Menu from "../components/Menu";

const AuthStack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
      <AuthStack.Navigator initialRouteName="Log in">
        <AuthStack.Screen name="Log in" component={LogIn} />
        <AuthStack.Screen name="Registrar" component={Register} />
        <AuthStack.Screen name="Carrinho" component={ShopCart} />
        <AuthStack.Screen name="Perfil" component={Profile} />
        <AuthStack.Screen name="Notificações" component={Notification} />
      </AuthStack.Navigator>
  );
};

export default App;
