import { useEffect } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	TextInput,
	Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Pregnancy from "../../assets/img/pregnant.jpeg";
import Prescription from "../../assets/img/prescription.png";
import Clinic from "../../assets/img/clinic.png";
import Doctor from "../../assets/img/doctor-injection.png";

import { useNavigation } from "@react-navigation/native";
import { styles } from "../../../style";
import { useGlobalContext } from "../../contexts";
import { AlertComponent } from "../../components/Alert";

const SquareView = (props) => {
	return (
		<View
			style={{
				height: props.size,
				width: props.size,
				backgroundColor: props.color,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{props.children}
		</View>
	);
};

export const Home = () => {
	const { email, setEmail, setName, setPassword, alert, handleShowAlert } =
		useGlobalContext();
	const { navigate } = useNavigation();

	const handleBloodTestRequest = async () => {
		handleShowAlert(true, "Test solicitado", "success");
		navigate("Info exame");
		const testData = {
			name,
			email,
			weight,
			height,
			age,
			phone,
			warning,
			examType: "Teste de sangue",
			status: "Pendente",
			price: 50000.0,
		};

		try {
			const response = await axios.post(
				"http://localhost:3333/exam/request",
				testData
			);
			console.log("blood test request was successful");
			setUser(response);
		} catch (error) {
			console.log("blood test request: ", error);
		}
	};

	const handlePregnancyTestRequest = async () => {
		handleShowAlert(true, "Test solicitado", "success");
		navigate("Info exame");

		const testData = {
			name,
			email,
			weight,
			height,
			age,
			phone,
			warning,
			examType: "Teste de grávidez",
			status: "Pendente",
			price: 22000.0,
		};

		try {
			const response = await axios.post(
				"http://localhost:3333/exam/request",
				testData
			);

			console.log("pregnancy test request was successful");
			setUser(response);
		} catch (error) {
			console.log("pregnancy test request: ", error);
		}
	};

	const handlePrescriptionRequest = async () => {
		handleShowAlert(true, "Test solicitado", "success");
		navigate("Info exame");

		const testData = {
			name,
			email,
			weight,
			height,
			age,
			phone,
			warning,
			examType: "Receita",
			status: "Pendente",
			price: 50000.0,
		};

		try {
			const response = await axios.post(
				"http://localhost:3333/exam/request",
				testData
			);

			console.log("prescription request was successful");
			setUser(response);
		} catch (error) {
			console.log("prescription test request: ", error);
		}
	};

	const handleColonExamRequest = async () => {
		handleShowAlert(true, "Test solicitado", "success");
		navigate("Info exame");

		const testData = {
			name,
			email,
			weight,
			height,
			age,
			phone,
			warning,
			examType: "Exame do colón",
			status: "Pendente",
			price: 70000.0,
		};

		try {
			const response = await axios.post(
				"http://localhost:3333/exam/request",
				testData
			);

			console.log("colon exam request was successful");
			setUser(response);
		} catch (error) {
			console.log("colon exam request: ", error);
		}
	};

	const handlePatientSignout = async () => {
		try {
			navigate("Principal");
			setName("");
			setEmail("");
			setPassword("");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<View style={styles.profileContainer}>
			<View style={styles.profileContent}>
				<Text style={styles.title}>Olá, {email}</Text>
				<View>
					{alert.show && (
						<AlertComponent {...alert} removeAlert={handleShowAlert} />
					)}
				</View>
				<TouchableOpacity activeOpacity={0.7} onPress={handlePatientSignout}>
					<FontAwesome name="sign-out" size={24} color="#189AB4" />
				</TouchableOpacity>
			</View>
			<View style={styles.testContainer}>
				<TextInput
					textContentType="name"
					placeholder="Procurar por exames ou receitas..."
					style={styles.input}
				/>
				<Text style={styles.popular}>Testes populares</Text>
				<View style={styles.testContent}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.test}
						onPress={handlePregnancyTestRequest}
					>
						<Image source={Pregnancy} style={styles.testImage} />
						<View style={styles.testIcon}>
							<AntDesign name="plus" size={24} color="black" />
						</View>
						<View style={styles.testDescription}>
							<Text style={styles.subtitle}>Teste de grávidez</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.test}
						onPress={handlePrescriptionRequest}
					>
						<Image source={Prescription} style={styles.testImage} />
						<View style={styles.testIcon}>
							<AntDesign name="plus" size={24} color="black" />
						</View>
						<View style={styles.testDescription}>
							<Text style={styles.subtitle}>Receitas</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.test}
						onPress={handleBloodTestRequest}
					>
						<Image source={Doctor} style={styles.testImage} />
						<View style={styles.testIcon}>
							<AntDesign name="plus" size={24} color="black" />
						</View>
						<View style={styles.testDescription}>
							<Text style={styles.subtitle}>Exames de sangue</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.test}
						onPress={handleColonExamRequest}
					>
						<Image source={Clinic} style={styles.testImage} />
						<View style={styles.testIcon}>
							<AntDesign name="plus" size={24} color="black" />
						</View>
						<View style={styles.testDescription}>
							<Text style={styles.subtitle}>Exames do colón</Text>
						</View>
					</TouchableOpacity>
				</View>
				<Text style={styles.popular}>O que precisas?</Text>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<SquareView size={80}>
						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.needDesc}
							onPress={() => navigate("Consultas")}
						>
							<Fontisto name="doctor" size={25} color="#189AB4" />
							<Text style={styles.needTitle}>Doctor</Text>
						</TouchableOpacity>
					</SquareView>
					<SquareView size={80}>
						<TouchableOpacity style={styles.needDesc} activeOpacity={0.7}>
							<Fontisto name="pills" size={25} color="#189AB4" />
							<Text style={styles.needTitle}>Medicação</Text>
						</TouchableOpacity>
					</SquareView>
					<SquareView size={80}>
						<TouchableOpacity style={styles.needDesc} activeOpacity={0.7}>
							<FontAwesome5 name="ambulance" size={25} color="#189AB4" />
							<Text style={styles.needTitle}>Ambulancia</Text>
						</TouchableOpacity>
					</SquareView>
					<SquareView size={80}>
						<TouchableOpacity style={styles.needDesc} activeOpacity={0.7}>
							<Fontisto name="injection-syringe" size={25} color="#189AB4" />
							<Text style={styles.needTitle}>Vacinas</Text>
						</TouchableOpacity>
					</SquareView>
					<SquareView size={80}>
						<TouchableOpacity style={styles.needDesc} activeOpacity={0.7}>
							<MaterialCommunityIcons
								name="hospital-box-outline"
								size={25}
								color="#189AB4"
							/>
							<Text style={styles.needTitle}>Hospitais</Text>
						</TouchableOpacity>
					</SquareView>
					<SquareView size={80}>
						<TouchableOpacity style={styles.needDesc} activeOpacity={0.7}>
							<FontAwesome5 name="heartbeat" size={25} color="#189AB4" />
							<Text style={styles.needTitle}>Pressão</Text>
						</TouchableOpacity>
					</SquareView>
				</ScrollView>
				<View style={styles.menuContainer}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.menuItem}
						onPress={() => navigate("Home")}
					>
						<FontAwesome name="home" size={35} color="#7D7D86" />
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.menuItem}
						onPress={() => navigate("Notificações")}
					>
						<FontAwesome name="bell" size={35} color="#7D7D86" />
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.menuItem}
						onPress={() => navigate("Pagamento")}
					>
						<FontAwesome name="shopping-cart" size={35} color="#7D7D86" />
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.menuItem}
						onPress={() => navigate("Sign in")}
					>
						<Ionicons
							name="ios-person-circle-outline"
							size={35}
							color="#7D7D86"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
