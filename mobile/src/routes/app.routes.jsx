import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Main } from "../screens/main";
import { Home } from "../screens/home";
import { PregnancyTest } from "../screens/pregnancy-test";
import { Prescription } from "../screens/prescription";
import { BloodExam } from "../screens/blood-exam";
import { ColonExam } from "../screens/colon-exam";
import { Profile } from "../screens/profile";
import { ShopCart } from "../screens/shop-cart";
import { Consult } from "../screens/consult";
import { Notification } from "../screens/notification";
import { SignIn } from "../screens/sign-in";
import { Register } from "../screens/register";
import { Payment } from "../screens/payment";
const { Navigator, Screen } = createNativeStackNavigator();
export const AppRoutes = () => {
	return (
		<Navigator initialRouteName="Principal">
			<Screen name="Principal" component={Main} />
			<Screen name="Sign in" component={SignIn} />
			<Screen name="Registrar" component={Register} />
			<Screen name="Consultas" component={Consult} />
			<Screen name="Exame do colón" component={ColonExam} />
			<Screen name="Exames de sangue" component={BloodExam} />
			<Screen name="Teste de grávidez" component={PregnancyTest} />
			<Screen name="Nova receita" component={Prescription} />
			<Screen name="Home" component={Home} />
			<Screen name="Perfil" component={Profile} />
			<Screen name="Carrinho" component={ShopCart} />
			<Screen name="Notificações" component={Notification} />
			<Screen name="Pagamento" component={Payment} />
		</Navigator>
	);
};
