import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "../screens/main";
import Home from "../screens/home";
import PregnancyTest from "../screens/pregnancy-test";
import Prescription from "../screens/prescription";
import BloodExam from "../screens/blood-exam";
import ColonExam from "../screens/colon-exam";
import Profile from "../screens/profile";
import ShopCart from "../screens/shop-cart";
import Consult from "../screens/consult";
import Notification from "../screens/notification";

const AppStack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
      <AppStack.Navigator initialRouteName="Principal">
        <AppStack.Screen name="Principal" component={Main} />
        <AppStack.Screen name="Consultas" component={Consult} />
        <AppStack.Screen name="Exame do colón" component={ColonExam} />
        <AppStack.Screen name="Exames de sangue" component={BloodExam} />
        <AppStack.Screen name="Teste de grávidez" component={PregnancyTest} />
        <AppStack.Screen name="Nova receita" component={Prescription} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
  );
};

export default App;
