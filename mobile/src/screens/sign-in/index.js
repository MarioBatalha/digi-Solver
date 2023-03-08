import {
	View,
	TextInput,
	Image,
	Text,
	TouchableOpacity,
	Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../style";

import Logo from "../../assets/img/digisolve-logo.png";
import { useGlobalContext } from "../../contexts";

export const SignIn = () => {
	const { email, password, setEmail, setPassword, handleUserSignin } =
		useGlobalContext();
	const { navigate } = useNavigation();

	const handleSignIn = () => {
		Alert.alert("sigin success");
	};

	return (
		<View style={styles.signin}>
			<Image source={Logo} style={styles.signinLogoImg} />
			<Text style={styles.signinTitle}>Bem-vindo de volta!</Text>
			<Text style={styles.signinSubtitle}>
				Entre e peça novos exames ou receitas.
			</Text>
			<View style={styles.signinContainer}>
				<TextInput
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
					keyboardType="email-address"
					style={styles.signinInput}
				/>
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					keyboardType="visible-password"
					secureTextEntry
					style={styles.signinInput}
				/>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.signinButton}
					onPress={handleUserSignin}
				>
					<Text style={styles.signinTouchableValue}>Entrar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonGoogle} activeOpacity={0.7}>
					<Text style={styles.touchableValueGoogle}>Usar conta google</Text>
					<AntDesign name="google" size={24} color="white" />
				</TouchableOpacity>
				<View style={styles.noAccount}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.createAccount}
						onPress={() => navigate("Registrar")}
					>
						<Text style={styles.siginSubtitle}>
							Não tem uma conta? Criar uma.
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
