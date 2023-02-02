import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "../screen/main";
import Home from "../screen/home";
import PregnancyTest from "../screen/pregnancy-test";
import Prescription from "../screen/prescription";
import BloodExam from "../screen/blood-exam";
import ColonExam from "../screen/colon-exam";
import Profile from "../screen/profile";
import ShopCart from "../screen/shop-cart";
import Consult from "../screen/consult";
import Notification from "../screen/notification";

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
