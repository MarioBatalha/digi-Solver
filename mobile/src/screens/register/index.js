import { useState } from "react";
import {
	View,
	TextInput,
	Image,
	Text,
	TouchableOpacity,
	Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/img/digisolve-logo.png";
import { styles } from "../../../style";
import { useGlobalContext } from "../../contexts";

export const Register = () => {
	const {
		name,
		email,
		password,
		weight,
		height,
		age,
		phone,
		warning,
		setName,
		setEmail,
		setPassword,
		setWeight,
		setHeight,
		setAge,
		setPhone,
		setWarning,
		user,
		handleUserSignup,
	} = useGlobalContext();

	const { navigate } = useNavigation();

	return (
		<View style={styles.registerLogin}>
			<Image source={Logo} style={styles.logoImg} />
			<Text style={styles.registerTitle}>Bem-vindo</Text>
			<Text style={styles.registerSubtitle}>
				Crie uma conta e explore das nossas soluções.
			</Text>
			<View style={styles.registerLoginContainer}>
				<TextInput
					placeholder="Nome completo"
					value={name}
					onChangeText={(text) => setName(text)}
					style={styles.registerInput}
				/>
				<TextInput
					placeholder="Email"
					keyboardType="name"
					value={email}
					style={styles.registerInput}
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					maxLength={15}
					placeholder="Password"
					value={password}
					keyboardType="visible-password"
					onChangeText={(text) => setPassword(text)}
					secureTextEntry
					style={styles.registerInput}
				/>
				<View style={styles.registerInputGroup}>
					<TextInput
						maxLength={4}
						placeholder="Peso"
						keyboardType="numeric"
						value={weight}
						onChangeText={(text) => setWeight(text)}
						style={styles.registerInputItems}
					/>
					<TextInput
						maxLength={4}
						placeholder="Altura"
						value={height}
						onChangeText={(text) => setHeight(text)}
						keyboardType="numeric"
						style={styles.registerInputItems}
					/>
					<TextInput
						maxLength={3}
						placeholder="Idade"
						value={age}
						onChangeText={(text) => setAge(text)}
						keyboardType="numeric"
						style={styles.registerInputItems}
					/>
				</View>
				<TextInput
					maxLength={12}
					placeholder="Telefone"
					value={phone}
					onChangeText={(text) => setPhone(text)}
					keyboardType="numeric"
					style={styles.registerInput}
				/>
				<TextInput
					multiline
					value={warning}
					onChangeText={(text) => setWarning(text)}
					placeholder="É alergico a alguma substância"
					style={styles.registerInput}
				/>
				<TouchableOpacity
					style={styles.registerButton}
					activeOpacity={0.7}
					onPress={handleUserSignup}
				>
					<Text style={styles.registerTouchableValue}>Registrar</Text>
				</TouchableOpacity>
				<View style={styles.noAccount}>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.createAccount}
						onPress={() => navigate("Sign in")}
					>
						<Text style={styles.registerSubtitle}>
							Já tenho uma conta? Entre.
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};
