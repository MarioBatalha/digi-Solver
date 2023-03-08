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
	const { email } = useGlobalContext();
	const { navigate } = useNavigation();
	return (
		<View style={styles.profileContainer}>
			<View style={styles.profileContent}>
				<Text style={styles.title}>Olá, {email}</Text>
				<TouchableOpacity activeOpacity={0.7}>
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
						onPress={() => navigate("Teste de grávidez")}
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
						onPress={() => navigate("Nova receita")}
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
						onPress={() => navigate("Exames de sangue")}
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
						onPress={() => navigate("Exame do colón")}
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
						onPress={() => navigate("Carrinho")}
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
