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
import Menu from "./src/components/Menu";

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={Main} />
        <Stack.Screen name="Log in" component={LogIn} />
        <Stack.Screen name="Consultas" component={Consult} />
        <Stack.Screen name="Exame do colón" component={ColonExam} />
        <Stack.Screen name="Exames de sangue" component={BloodExam} />
        <Stack.Screen name="Teste de grávidez" component={PregnancyTest} />
        <Stack.Screen name="Nova receita" component={Prescription} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registrar" component={Register} />
        <Stack.Screen name="Carrinho" component={ShopCart} />
        <Stack.Screen name="Perfil" component={Profile} />
        <Stack.Screen name="Notificações" component={Notification} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
