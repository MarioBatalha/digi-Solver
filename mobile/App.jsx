import { StatusBar } from "react-native";
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
	Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

const App = () => {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_700Bold,
		Inter_800ExtraBold,
	});

	if (!fontsLoaded) {
		return <Loading />;
	}
	return (
		<>
			<Routes />
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
		</>
	);
};

export default App;
