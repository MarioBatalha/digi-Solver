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
import { AlertComponent } from "../../components/Alert";
import axios from "axios";
export const SignIn = () => {
	const {
		email,
		password,
		name,
		alert,
		handleShowAlert,
		setEmail,
		setPassword,
	} = useGlobalContext();

	const { navigate } = useNavigation();

	const handlePatientSignin = async () => {
		Alert.alert(`Bem-vindo/a ${name}`);
		navigate("Home");
		try {
			if (!email || !password) {
				handleShowAlert(true, "Por favor, preencha os campos", "danger");
			}

			const response = await axios.post(
				"http://localhost:3333/patient/signin",
				{
					email,
					password,
				}
			);

			const userData = await response.json();

			setUser(userData);
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<View style={styles.signin}>
			<Image source={Logo} style={styles.signinLogoImg} />
			<Text style={styles.signinTitle}>Bem-vindo de volta!</Text>
			<Text style={styles.signinSubtitle}>
				Entre e peça novos exames ou receitas.
			</Text>
			<View style={styles.signinContainer}>
				{alert.show && (
					<AlertComponent {...alert} removeAlert={handleShowAlert} />
				)}

				<TextInput
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
					keyboardType="email-address"
					style={styles.signinInput}
				/>
				<TextInput
					placeholder="Palavra-passe"
					value={password}
					onChangeText={(text) => setPassword(text)}
					keyboardType="visible-password"
					secureTextEntry
					style={styles.signinInput}
				/>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.signinButton}
					onPress={handlePatientSignin}
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
						<Text style={styles.signinSubtitle}>
							Não tem uma conta? Criar uma.
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
