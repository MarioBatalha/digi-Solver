import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AppProvider } from "../contexts";

export const Routes = () => {
	return (
		<NavigationContainer>
			<AppProvider>
				<AppRoutes />
			</AppProvider>
		</NavigationContainer>
	);
};
